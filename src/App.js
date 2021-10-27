import "./App.css";
import { useState } from 'react';
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Notification } from "./components/Notification/Notification";


export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleClick = (e) => {
        const name = e.currentTarget.name;
        console.log(name);

        switch (name) {
            case "good":
                setGood(prevState => prevState + 1);
                break;
            case "neutral":
                setNeutral(prevState => prevState + 1);
                break;
            case "bad":
                setBad(prevState => prevState + 1);
                break;
            default:
        }
        
    };
    
    const countTotalFeedback = () => {
        const totalValue = good + neutral + bad;
        return totalValue;
    };
    
    const countPositiveFeedbackPercentage = () => {
        const positivePersentage = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return positivePersentage;
     }
    
    return (
        <div className="App">
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={["good", "neutral", "bad"]}
                    onLeaveFedback={handleClick}
                />
            </Section>
            {countTotalFeedback() > 0 ? (
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                </Section>
            ) : (
                <Notification message="No feedback given" />
            )}
        </div>
    );
}


