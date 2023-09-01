import React, { useState, useEffect } from 'react';
import './style.css'; // Import CSS file for styling

function CountdownTimer() {
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(countdownInterval);
                setMinutes(4);
                setSeconds(59);
            } else {
                if (seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [minutes, seconds]);

    //biến đổi minutes và seconds thành chuỗi có độ dài bằng 2 ký tự và thêm "0" vào đầu chuỗi nếu cần thiết.
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');

    return (
        <div className="countdown-timer">
            <div >
                <span>Phút</span>
                <div className='d-flex'>
                    <div className="digit">{minutesString.charAt(0)}</div>
                    <div className="digit">{minutesString.charAt(1)}</div>
                </div>
            </div>

            <div>
                <span>Giây</span>
                <div className='d-flex'>
                    <div className="digit">{secondsString.charAt(0)}</div>
                    <div className="digit animate ">{secondsString.charAt(1)}</div>
                </div>
            </div>


        </div>
    );
}

export default CountdownTimer;