const cardsData = [
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg', link: 'https://store.steampowered.com/app/1623730/Palworld/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg', link: 'https://store.steampowered.com/app/730/CounterStrike_2/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg', link: 'https://store.steampowered.com/app/570/Dota_2/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg', link: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg', link: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg', link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1938090/header.jpg', link: 'https://store.steampowered.com/app/1938090/Call_of_Duty/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg', link: 'https://store.steampowered.com/app/440/Team_Fortress_2/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg', link: 'https://store.steampowered.com/app/252490/Rust/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg', link: 'https://store.steampowered.com/app/1172470/Apex_Legends/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg', link: 'https://store.steampowered.com/app/1966720/Lethal_Company/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2252570/header.jpg', link: 'https://store.steampowered.com/app/2252570/Football_Manager_2024/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg', link: 'https://store.steampowered.com/app/236390/War_Thunder/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg', link: 'https://store.steampowered.com/app/2195250/EA_SPORTS_FC_24/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg?', link: 'https://store.steampowered.com/app/230410/Warframe/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg', link: 'https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/2073850/header.jpg', link: 'https://store.steampowered.com/app/2073850/THE_FINALS/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/221100/header.jpg', link: 'https://store.steampowered.com/app/221100/DayZ' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/304930/header.jpg', link: 'https://store.steampowered.com/app/304930/Unturned/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/431960/header.jpg', link: 'https://store.steampowered.com/app/431960/Wallpaper_Engine/' },
  {imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg', link: 'https://store.steampowered.com/app/1599340/Lost_Ark/' },

];

const cardsContainer = document.getElementById('cards');

cardsData.forEach(({imageUrl, link }) => {
  const cardElement = document.createElement('div');              //create new div for each card
  cardElement.className = 'card';

  cardElement.addEventListener('click', () => {
    window.location.href = link;                                  //opens the link that is specified in the card data array
  });

  const frontImageElement = document.createElement('img');        //create new image for each card
  frontImageElement.className = 'card-front-image card-image';
  frontImageElement.src = imageUrl;                               //get image from URL

  const fadersElement = document.createElement('div');
  fadersElement.className = 'card-faders';

  for (let i = 0; i < 8; i++) {                                   //create faders
    const faderImageElement = document.createElement('img');
    faderImageElement.className = 'card-fader card-image';
    faderImageElement.src = imageUrl;
    fadersElement.appendChild(faderImageElement);
  }
  cardElement.appendChild(frontImageElement);                     //stack everything
  cardElement.appendChild(fadersElement);
  cardsContainer.appendChild(cardElement);
});
