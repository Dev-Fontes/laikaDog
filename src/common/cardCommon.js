import { CardActionArea, CardMedia } from "@material-ui/core/";
import IMG from "../assets/GalleryImages/dogFamily.jpg";
import * as S from "./styled";

export const CardCommon = (props) => {
  return (
    <S.CardCustom>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="news"
          height="140"
          width="340"
          image={IMG}
          title="news"
        />
        <S.CardContentCustom>
          <S.TitleCustom>{props.title}</S.TitleCustom>
          <S.SubtitleCustom>{props.subtitle}</S.SubtitleCustom>
        </S.CardContentCustom>
      </CardActionArea>
    </S.CardCustom>
  );
};
