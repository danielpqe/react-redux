import React from "react";
import { Grid, Image, Label, Icon } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";

function PokemonCard({ pokemon }) {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image centered src="" alt="Pokemon card" />
        <p className="Pokemon-title">Ditto</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
}

export default PokemonCard;
