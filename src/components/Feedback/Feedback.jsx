export default function Feedback({
    totalFeedback,
    positiveFeedback,
    feedback: { good, neutral, bad },
}) {
    return (
        <ul>
            <li>Giid: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Positive: {positiveFeedback}%</li>
            <li>Total: {totalFeedback}</li>
        </ul>
    );
}