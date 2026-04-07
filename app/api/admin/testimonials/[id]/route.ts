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

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const data = readData();

  const tIdx = data.testimonials.findIndex((t: { id: string }) => t.id === id);
  if (tIdx !== -1) {
    data.testimonials[tIdx] = { ...data.testimonials[tIdx], ...body };
    writeData(data);
    return NextResponse.json(data.testimonials[tIdx]);
  }

  const mIdx = data.miniTestimonials.findIndex((t: { id: string }) => t.id === id);
  if (mIdx !== -1) {
    data.miniTestimonials[mIdx] = { ...data.miniTestimonials[mIdx], ...body };
    writeData(data);
    return NextResponse.json(data.miniTestimonials[mIdx]);
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAuthed(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const data = readData();

  const prevTotal = data.testimonials.length + data.miniTestimonials.length;
  data.testimonials = data.testimonials.filter((t: { id: string }) => t.id !== id);
  data.miniTestimonials = data.miniTestimonials.filter((t: { id: string }) => t.id !== id);

  if (data.testimonials.length + data.miniTestimonials.length === prevTotal) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  writeData(data);
  return NextResponse.json({ ok: true });
}
