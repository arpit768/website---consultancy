import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'testimonials.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'educar-admin-2025';
const COOKIE_NAME = 'admin_session';

function isAuthed(req: NextRequest) {
  return req.cookies.get(COOKIE_NAME)?.value === ADMIN_PASSWORD;
}

function readData() {
  if (!existsSync(DATA_FILE)) return { testimonials: [], miniTestimonials: [] };
  return JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data: unknown) {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readData());
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const data = readData();

  if (body.type === 'mini') {
    const newMini = {
      id: `mt-${Date.now()}`,
      name: body.name,
      quote: body.quote,
      country: body.country,
    };
    data.miniTestimonials.push(newMini);
    writeData(data);
    return NextResponse.json(newMini, { status: 201 });
  }

  const newTestimonial = {
    id: `t-${Date.now()}`,
    quote: body.quote,
    name: body.name,
    program: body.program,
    target: body.target,
    avatar: body.avatar || `https://picsum.photos/seed/${Date.now()}/100/100`,
    country: body.country,
    rating: body.rating ?? 5,
  };
  data.testimonials.push(newTestimonial);
  writeData(data);

  return NextResponse.json(newTestimonial, { status: 201 });
}
