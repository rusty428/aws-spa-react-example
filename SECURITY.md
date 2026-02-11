# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this example SPA, please report it by:

1. **Opening a GitHub Issue**: [Create an issue](https://github.com/rusty428/aws-spa-react-example/issues) with the "security" label
2. **Email**: Contact the maintainer directly at rustynations@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

## Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Varies based on severity and complexity

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Best Practices

When using this example as a starting point for your own SPA:

1. **Dependencies**: Regularly update dependencies to patch security vulnerabilities
   ```bash
   npm audit
   npm audit fix
   ```

2. **Environment Variables**: Never commit sensitive data (API keys, secrets) to version control
   - Use `.env.local` for local development (add to `.gitignore`)
   - Configure production secrets in AWS Systems Manager Parameter Store or Secrets Manager

3. **Authentication**: Implement proper authentication (AWS Cognito recommended)
   - Don't store credentials in localStorage without encryption
   - Use secure session management
   - Implement proper CORS policies

4. **API Security**: 
   - Use HTTPS for all API calls
   - Implement proper API authentication (API keys, JWT tokens)
   - Validate and sanitize all user inputs

5. **CloudFront**: 
   - Enable AWS WAF for DDoS protection
   - Configure appropriate cache policies
   - Use Origin Access Control (OAC) for S3 bucket security

## Known Limitations

This is an example application for demonstration purposes. Before using in production:

- Add comprehensive input validation
- Implement proper error handling
- Add security headers (CSP, HSTS, etc.)
- Configure logging and monitoring
- Implement rate limiting for API calls
- Add automated security testing to CI/CD pipeline
