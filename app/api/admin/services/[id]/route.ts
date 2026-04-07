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

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const services = readServices();
  const idx = services.findIndex((s: { id: string }) => s.id === id);

  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  services[idx] = { ...services[idx], ...body };
  writeServices(services);

  return NextResponse.json(services[idx]);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const services = readServices();
  const filtered = services.filter((s: { id: string }) => s.id !== id);

  if (filtered.length === services.length) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  writeServices(filtered);
  return NextResponse.json({ ok: true });
}
