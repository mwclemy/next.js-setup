import React from 'react';
import User from '../../components/User/User';
const authPage = (props) => (
    <div>
        <h1>The auth Index Page {props.appName}</h1>
        <User name="Clement" age={26}/>
        <style jsx>
            {`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }
            `}
        </style>
    </div>
);

authPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "Clement App"});
        },1000);
    })
    return promise;
}

export default authPage;