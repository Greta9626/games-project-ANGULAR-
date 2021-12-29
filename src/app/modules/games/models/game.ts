export interface IGame{
  id: number,
  title: string,
  thumbnail: string,
  short_description: string,
  game_url: string,
  genre: string,
  platform: string,
  publisher: string,
  developer: string,
  release_date: string,
  freetogame_profile_url: string
}

// export class Game{
//   protected constructor(
//     public id = 0,
//     public title = '',
//     public thumbnail = '',
//     public short_description = '',
//     public game_url = '',
//     public genre = '',
//     public platform = '',
//     public publisher = '',
//     public developer = '',
//     public release_date = '',
//     public freetogame_profile_url = ''
//     ) {}

//     public static Build(game: IGame){
//       return new this(
//         game.id,
//         game.title,
//         game.thumbnail,
//         game.short_description,
//         game.game_url,
//         game.genre,
//         game.platform,
//         game.publisher,
//         game.developer,
//         game.release_date,
//         game.freetogame_profile_url
//       );
//     }
// }
