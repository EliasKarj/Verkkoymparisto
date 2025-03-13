import React from 'react';

export default function LoginMessage({ isLoggedIn }) {
    return (
        <h2>
            {isLoggedIn ? 'Tervetuloa takaisin' : 'Ole hyvä ja kirjaudu sisään.'}
        </h2>
    );
}
