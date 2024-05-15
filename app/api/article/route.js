import { mysqlPool } from '@/app/util/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const promisePool = mysqlPool.promise()
    const [rows, fields] = await promisePool.query(
      `SELECT * FROM mytable;`
    )
    return NextResponse.json(rows)
  }

