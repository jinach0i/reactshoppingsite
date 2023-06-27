import { useState } from 'react';
export default function Announcement() {
    const [content1, setContent1] = useState(['특별 할인','처음 주문하시나요? 사은품으로 양배추즙을 무료로 드립니다!'])
    return(
        <div className="announcementbox">
            <h2>오늘의 {content1[1]} 이벤트</h2>
            <p>{content1[2]}</p>
        </div>
    )
};
