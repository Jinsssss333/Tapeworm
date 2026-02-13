document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const analyzeBtn = document.getElementById('analyze-btn');
    const inputSection = document.getElementById('input-section');
    const resultsSection = document.getElementById('results-section');

    // Inputs
    const subjectInput = document.getElementById('email-subject');
    const senderInput = document.getElementById('email-sender');
    const bodyInput = document.getElementById('email-body');

    // Display Elements
    const displaySubject = document.getElementById('display-subject');
    const displaySender = document.getElementById('display-sender');
    const displayBody = document.getElementById('display-body');
    const displayAvatar = document.getElementById('display-avatar');

    // AI Result Elements
    const aiSummary = document.getElementById('ai-summary');
    const aiSentiment = document.getElementById('ai-sentiment');
    const aiPriority = document.getElementById('ai-priority');
    const aiActions = document.getElementById('ai-actions');
    const aiReply = document.getElementById('ai-reply');

    analyzeBtn.addEventListener('click', async () => {
        // validate
        if (!bodyInput.value.trim()) {
            alert('Please paste an email body to analyze.');
            return;
        }

        // 1. UI Loading State
        analyzeBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Analyzing...';
        analyzeBtn.disabled = true;

        // 2. Simulate AI Processing Delay (random 1.5 - 2.5s)
        await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));

        // 3. Process Data (Mock AI)
        const emailData = {
            subject: subjectInput.value || "No Subject",
            sender: senderInput.value || "Unknown Sender",
            body: bodyInput.value
        };

        const results = mockAIAnalysis(emailData);

        // 4. Update UI
        updateUI(emailData, results);

        // 5. Reveal & Reset Button
        inputSection.style.display = 'none'; // Hide input to focus on results? Or keep both. Let's hide for "App-like" feel
        resultsSection.classList.remove('hidden');
        resultsSection.style.display = 'grid'; // ensure grid is applied 

        lucide.createIcons();
    });

    function updateUI(data, results) {
        // Update Email View
        displaySubject.textContent = data.subject;
        displaySender.textContent = data.sender;
        displayBody.textContent = data.body;
        displayAvatar.textContent = getInitials(data.sender);

        // Update AI Cards
        aiSummary.innerHTML = `<p>${results.summary}</p>`;

        aiSentiment.textContent = results.sentiment;
        aiSentiment.style.color = getSentimentColor(results.sentiment);

        aiPriority.textContent = results.priority;
        aiPriority.style.color = getPriorityColor(results.priority);

        // Actions
        aiActions.innerHTML = results.actions.map(action =>
            `<li>${action}</li>`
        ).join('');

        // Reply
        aiReply.value = results.reply;
    }

    function mockAIAnalysis(data) {
        const text = data.body.toLowerCase();

        // Heuristic Analysis
        let sentiment = "Neutral";
        if (text.includes("thanks") || text.includes("great") || text.includes("appreciate")) sentiment = "Positive";
        if (text.includes("bad") || text.includes("issue") || text.includes("sorry") || text.includes("disappointed")) sentiment = "Negative";

        let priority = "Normal";
        if (text.includes("asap") || text.includes("urgent") || text.includes("deadline") || text.includes("immediately")) priority = "High";

        // Mock Summary: Extract first sentence or summarize
        const sentences = data.body.split(/[.!?]/).filter(s => s.trim().length > 0);
        const summary = sentences.length > 0
            ? `<b>TL;DR:</b> The sender is discussing ${data.subject.toLowerCase()}. Key points include: ${sentences[0].trim()}.`
            : "No content to summarize.";

        // Mock Actions
        const actions = [];
        if (text.includes("meeting") || text.includes("schedule")) actions.push("Schedule a meeting");
        if (text.includes("review") || text.includes("check")) actions.push("Review the attached documents");
        if (text.includes("call")) actions.push("Prepare for a call");
        if (actions.length === 0) actions.push("Acknowledge receipt", "Follow up if necessary");

        // Mock Reply
        const reply = `Hi ${data.sender.split(' ')[0] || 'there'},\n\nThanks for the email regarding "${data.subject}".\n\nI've noted the points about ${sentences[0]?.substring(0, 20) || 'this topic'} and will get back to you shortly.\n\nBest,\n[Your Name]`;

        return {
            summary,
            sentiment,
            priority,
            actions,
            reply
        };
    }

    function getInitials(name) {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    }

    function getSentimentColor(sentiment) {
        if (sentiment === "Positive") return "var(--success-color)";
        if (sentiment === "Negative") return "var(--danger-color)";
        return "var(--text-secondary)";
    }

    function getPriorityColor(priority) {
        if (priority === "High") return "var(--danger-color)";
        return "var(--success-color)";
    }
});
