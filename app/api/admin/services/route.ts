import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'services.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'educar-admin-2025';
const COOKIE_NAME = 'admin_session';

function isAuthed(req: NextRequest) {
  return req.cookies.get(COOKIE_NAME)?.value === ADMIN_PASSWORD;
}

function readServices() {
  if (!existsSync(DATA_FILE)) return [];
  return JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
}

function writeServices(data: unknown[]) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readServices());
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const services = readServices();

  const newService = {
    id: `svc-${Date.now()}`,
    num: String(services.length + 1).padStart(2, '0'),
    ...body,
  };

  services.push(newService);
  writeServices(services);

  return NextResponse.json(newService, { status: 201 });
}
