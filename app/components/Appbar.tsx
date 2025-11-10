'use client';

import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar() {
    const session = useSession();

    return <div>
        <div className="flex justify-between">
            <div>Muzi</div>
            <div>
                {session.data?.user && <button className="cursor-pointer" onClick={() => signOut()}>Logout</button>}
            </div>
            {!session.data?.user &&  <div>
                <button className="cursor-pointer" onClick={() => signIn()}>
                    signin
                </button>
            </div>}
        </div>
    </div>
}