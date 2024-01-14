const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1:  1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //1
  game.scored.forEach((player, index) => {
    const goals = Math.floor(Math.random() * 5) + 1; // Tạo số bàn thắng ngẫu nhiên từ 1 đến 5
    console.log(` ${index + 1}: ${player} (${goals} goals)`);
  });


  //2
  

    //3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamName = game[team.toLowerCase()]; // Lấy tên đội bóng từ object 'game'
  
    // In ra console tỉ lệ cược đẹp
    console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
  }
  
  // Tạo đối tượng 'scorers'
  const scorers = {};
  
  // Lặp qua mảng 'scored' để đếm số bàn thắng của mỗi cầu thủ
  game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  
  console.log("Cầu thủ ghi bàn", scorers);
  