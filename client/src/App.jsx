import { useState } from 'react'
import EmailForm from './components/EmailForm'
import ToneSelector from './components/ToneSelector'
import EmailDisplay from './components/EmailDisplay'
import { Sparkles } from 'lucide-react'

function App() {
  const [emailData, setEmailData] = useState({
    recipient: '',
    company: '',
    product: '',
    goal: ''
  })
  const [tone, setTone] = useState('full')
  const [generatedEmail, setGeneratedEmail] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    setGeneratedEmail(null)
    try {
      console.log("Sending request to backend...");
      const response = await fetch('http://localhost:3000/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...emailData, tone }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json()
      console.log("Received data:", data);
      setGeneratedEmail(data)
    } catch (error) {
      console.error("Error generating email:", error)
      alert(`Failed to generate email. Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-pink-500 selection:text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              RizzMail
            </h1>
          </div>
          <p className="text-neutral-400">Cold emails, but make it Gen Z.</p>
        </header>

        {/* Main Content */}
        <div className="space-y-8">

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
            <EmailForm data={emailData} onChange={setEmailData} />
            <div className="my-6 border-t border-neutral-800"></div>
            <ToneSelector selected={tone} onSelect={setTone} />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full mt-6 bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>Generating...</>
              ) : (
                <>Generate Rizz <Sparkles className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {generatedEmail && (
            <EmailDisplay email={generatedEmail} onRegenerate={handleGenerate} />
          )}

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} RizzMail. Built for the vibes.</p>
        </footer>

      </div>
    </div>
  )
}

export default App
