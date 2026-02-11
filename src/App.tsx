import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {/* AWS Branding */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#FF9900', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            AWS SPA Hosting Kit
          </h1>
          <p style={{ color: '#232F3E', fontSize: '1.2rem' }}>
            Example React SPA - Deployed via CDK + CodePipeline
          </p>
        </div>

        {/* Demo Counter */}
        <div style={{
          background: '#232F3E',
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2>Interactive Demo</h2>
          <button
            onClick={() => setCount((count) => count + 1)}
            style={{
              background: '#FF9900',
              color: '#232F3E',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Count: {count}
          </button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Click the button to test React state management
          </p>
        </div>

        {/* Placeholder: API Integration */}
        {/* 
        TODO: Add API endpoint calls here
        
        Example with fetch:
        const [data, setData] = useState(null);
        
        useEffect(() => {
          fetch('https://api.example.com/items')
            .then(res => res.json())
            .then(data => setData(data));
        }, []);
        
        Example with API Gateway:
        const API_URL = 'https://abc123.execute-api.us-east-1.amazonaws.com/prod';
        
        Learn more: https://github.com/rusty428/aws-spa-hosting-kit#readme
        */}

        {/* Placeholder: Authentication Logic */}
        {/*
        TODO: Add Cognito authentication here
        
        Example with AWS Amplify:
        import { Amplify } from 'aws-amplify';
        import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth';
        
        Amplify.configure({
          Auth: {
            Cognito: {
              userPoolId: 'us-east-1_ABC123',
              userPoolClientId: 'abc123def456',
            }
          }
        });
        
        const handleSignIn = async () => {
          await signIn({ username, password });
        };
        
        Learn more: https://docs.amplify.aws/react/build-a-backend/auth/
        */}

        {/* Placeholder: State Management */}
        {/*
        TODO: Add state management here
        
        Example with Redux:
        import { Provider } from 'react-redux';
        import { store } from './store';
        
        Example with Zustand:
        import create from 'zustand';
        const useStore = create((set) => ({
          items: [],
          addItem: (item) => set((state) => ({ items: [...state.items, item] })),
        }));
        
        Learn more about state management patterns:
        - Redux: https://redux.js.org/
        - Zustand: https://github.com/pmndrs/zustand
        */}

        {/* Architecture Information */}
        <div style={{
          background: '#f0f0f0',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#232F3E', marginTop: 0 }}>Architecture</h3>
          <ul style={{ textAlign: 'left', color: '#232F3E' }}>
            <li><strong>Frontend:</strong> React 19 + TypeScript + Vite</li>
            <li><strong>Hosting:</strong> Amazon S3 (static files)</li>
            <li><strong>CDN:</strong> Amazon CloudFront (global delivery)</li>
            <li><strong>CI/CD:</strong> AWS CodePipeline + CodeBuild</li>
            <li><strong>Source:</strong> GitHub (via AWS CodeConnections)</li>
          </ul>
        </div>

        {/* Deployment Information */}
        <div style={{
          background: '#e8f4f8',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #FF9900'
        }}>
          <h3 style={{ color: '#232F3E', marginTop: 0 }}>Automatic Deployment</h3>
          <p style={{ color: '#232F3E', margin: '0.5rem 0' }}>
            This application deploys automatically when you commit code to GitHub.
          </p>
          <p style={{ color: '#232F3E', margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Workflow:</strong> Git Push → CodePipeline → CodeBuild → S3 → CloudFront
          </p>
          <p style={{ color: '#232F3E', margin: '0.5rem 0', fontSize: '0.9rem' }}>
            <strong>Timeline:</strong> 5-10 minutes from commit to live
          </p>
          <p style={{ color: '#232F3E', margin: '0.5rem 0', fontSize: '0.85rem', marginTop: '1rem' }}>
            <strong>Powered by:</strong> <a href="https://github.com/rusty428/aws-spa-hosting-kit" target="_blank" rel="noopener noreferrer" style={{ color: '#FF9900' }}>AWS SPA Hosting Kit</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
