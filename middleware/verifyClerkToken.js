const verifyClerkToken = async (req, res, next) => {
    try {
      // Get the token from Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: 'No authorization token provided' });
      }
  
      // Remove 'Bearer ' prefix if present
      const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7)
        : authHeader;
  
      // Your Clerk PEM public key should be set as an environment variable
      const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;
      if (!publicKey) {
        throw new Error('CLERK_PEM_PUBLIC_KEY environment variable is not set');
      }
  
      // Verify the token
      const options = {
        algorithms: ['RS256'],
      };
  
      // Validate the token and decode its payload
      const decoded = jwt.verify(token, publicKey, options);
  
      // Validate expiration and not-before claims
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        throw new Error('Token has expired');
      }
      if (decoded.nbf > currentTime) {
        throw new Error('Token is not yet valid');
      }
  
      // Optional: Validate authorized parties (azp claim)
      // Replace these with your actual allowed origins
      const permittedOrigins = ['http://localhost:3000', 'https://yourdomain.com'];
      if (decoded.azp && !permittedOrigins.includes(decoded.azp)) {
        throw new Error('Invalid authorized party (azp claim)');
      }
  
      // Attach the decoded token to the request object for use in route handlers
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({
        error: 'Invalid token',
        details: error.message
      });
    }
};

export default verifyClerkToken;