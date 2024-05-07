import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import resp from "../../resp.json";
import css from "./App.module.css";






export default function App() {
    const [feedback, setFeetback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
    const updateFeedback = (feedbackType) => {
        setFeetback((prevFeedback) => ({
            ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    }
    const handleReset = () => {
        setFeetback({ good: 0, neutral: 0, bad: 0 });
    };
    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
    
    return (
        <div className={css.container}>
            <Description />
            <Options
                totalFeedback={totalFeedback}
                handleReset={handleReset}
                updateFeedback={updateFeedback}
                resp={resp}
            />
            {totalFeedback > 0 ? (
                <Feedback
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                    feedback={feedback}
                />
            ) : (
                    <Notification/>
            )}
        </div>
    )
}