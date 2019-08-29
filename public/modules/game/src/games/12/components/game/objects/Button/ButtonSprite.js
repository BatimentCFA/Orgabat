"use strict";
import BasicGameSprite from "system/phaser/BasicGameSprite";

export default class ButtonSprite extends BasicGameSprite {

    constructor(game, x, y, key, buttonObj) {
        super(game, x, y, `jeu12/other/${key}`, buttonObj);
        this.anchor.setTo(0.5);
        this.scale.set(1.2 * game.SCALE);
        this.inputEnabled = true;
        this.input.useHandCursor = true;
    }

};