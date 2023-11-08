/* eslint-disable react/no-unescaped-entities */


const Blogs = () => {
    return (
        <div className="px-5">
            <h1 className="text-5xl font-semibold text-center my-5"> Blogs </h1>
            <h1 className="text-2xl font-semibold mb-3">What is an access token and refresh token?</h1>
            <p>
                <h3 className="text-xl font-semibold">- Access Token: </h3>
                <ul className="pl-5">
                    <li>An access token is a short-lived, temporary token that is granted to a client application (such as a mobile app or a web application) after a successful authentication and authorization process. It is used to access protected resources, like user data or APIs, on behalf of the user.
                    </li>
                    <li>
                        Access tokens are typically time-limited and are used to authenticate requests when accessing resources. They are used in API calls as a way to prove that the client application has been granted permission by the user to access specific resources.
                    </li>
                </ul>
                <h3 className="text-xl font-semibold">- Refresh Token: </h3>
                <ul className="pl-5">
                    <li>A refresh token is a long-lived token that is also granted to the client application during the initial authentication and authorization process. Its primary purpose is to obtain new access tokens without requiring the user to re-authenticate.
                    </li>
                    <li>
                        Refresh tokens are securely stored by the client application and exchanged for a new access token when the old one expires. This allows the client to maintain access to resources without the user having to go through the authentication process again.
                    </li>
                </ul>
            </p>
            <h1 className="text-2xl font-semibold mb-3 mt-3">How do they work and where should we
                store them on the client-side?
            </h1>
            <p>
                <h2 className="text-xl font-semibold pl-1">How Access Tokens and Refresh Tokens Work:</h2>
                <h3><span className="text-xl font-semibold mt-3">- Access Token:</span>
                    <ul>
                        <li className="pl-5">
                            Access tokens are short-lived and are used to authenticate requests to protected resources. When a user logs in through OAuth 2.0, the authorization server (e.g., an identity provider or an OAuth server) issues an access token to the client application.
                        </li>
                    </ul>
                </h3>
                <h3>
                    <span className="text-xl font-semibold">- Refresh Token:</span>
                    <ul>
                        <li className=" pl-5">Refresh tokens are long-lived and are used to obtain new access tokens without requiring the user to re-authenticate. When the access token expires, the client can use the refresh token to request a new access token from the authorization server.</li>
                    </ul>
                </h3>
                <h3>
                    <span className="text-xl font-semibold mt-3">Where to Store Tokens on the Client-Side: </span>
                    <ul>
                        <li className="pl-5">Storing tokens on the client-side should be done with security in mind, as these tokens are sensitive and could potentially be exploited if not handled properly. </li>
                    </ul>
                </h3>
            </p>
            <p>
                <h1 className="text-xl font-semibold mt-3 mb-2">What is express js?</h1>
                <h1 className="pl-5">Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the development of web and API applications, offering features like routing, middleware support, error handling, and more. It's widely used for building server-side applications in JavaScript.</h1>
            </p>
            <p>
                <h1 className="text-xl font-semibold mt-3 mb-2">What is Nest JS</h1>
                <h1 className="pl-5">Nest.js is a TypeScript-based web application framework for building scalable and maintainable server-side applications in Node.js. It emphasizes modularity, dependency injection, decorators, and offers features like middleware, database integration, and testing support. It's well-suited for building complex and enterprise-level applications.</h1>
            </p>
            <p>
                <h1 className="text-xl font-semibold">- Explain My code.
                </h1>
             <ul className="mb-5">
             <li className="pl-5">
                    The name of my project is JobFinderHub, the JobFinderHub website is a job research site,
                    Here the user can find a job, and apply for a job.
                    I have used React JS as a javascript framework here, tailwind as a stylesheet framework,
                    And I used mongodb with express on the back end.
                    <br />
                    Google Firebase for user authentication is very popular, I have used Firebase for user authentication.
                    <br />
                    I used Tanstack-Query to fetch data from the backend,
                    And to secure API data, used JWT . Its full meaning Json Web Token.
                </li>
             </ul>
            </p>
        </div>
    );
};

export default Blogs;