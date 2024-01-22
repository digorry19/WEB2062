// Mảng sự kiện trong trận đấu
const events = [
    [10, '⚽ Goal'],
    [25, '🔄 Substitution'],
    [45, '🟨 Yellow Card'],
    [64, '🟨 Yellow Card'], // Thẻ vàng phút 64 (Không đúng)
    [72, '⚽ Goal'],
    [82, '🟥 Red Card'],
  ];
  
  // 1. Tạo mảng các sự kiện khác nhau xảy ra trong suốt trận đấu
  const uniqueEvents = [...new Set(events.map(event => event[1]))];
  
  // 2. Xóa sự kiện thẻ vàng phút 64
  events.forEach((event, index) => {
    if (event[0] === 64 && event[1] === '🟨 Yellow Card') {
      events.splice(index, 1);
    }
  });
  
  // 3. In ra console theo định dạng
  const totalMinutes = 90;
  const totalEvents = events.length;
  const averageEventInterval = totalMinutes / totalEvents;
  
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${averageEventInterval.toFixed(2)} phút`);
  
  // 4. In ra màn hình với đánh dấu hiệp 1 hay hiệp 2
  events.forEach(event => {
    const minute = event[0];
    const action = event[1];
    const half = minute <= totalMinutes / 2 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${action}`);
  });
  