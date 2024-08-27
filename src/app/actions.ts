'use server';

import { cookies } from 'next/headers'

export async function create(data: string) {
  const cookieStore = cookies()

  if (!cookieStore.has('userData')) {
    cookieStore.set('userData', data, { secure: true })
  }
}
