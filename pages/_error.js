import React from 'react';
import Link from 'next/link';
const indexPage = () => (
    <div>
        <h1>OOps, something went wrong.</h1>
        <p>You can <Link href="/"><a>Go back</a></Link>.</p>
    </div>
);

export default indexPage;