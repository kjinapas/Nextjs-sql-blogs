import { mysqlPool } from '@/app/util/db';
import { NextResponse } from 'next/server';

export async function GET(request,{params}) {
    const id = params.slug
    const promisePool = mysqlPool.promise()
    const [rows, fields] = await promisePool.query(
      `SELECT * FROM mytable WHERE Nid =${id};`
    )
    return NextResponse.json(rows)
  }

