class Fighter {
    character: Image;
    hurtbox: Image;
    speed: number;
    damage: number;
    jumpHeight: number
    maxJumps: number
    moveset: Moveset
constructor(character: Image, hurtbox: Image, speed: number, damage: number, jumpHeight: number, maxJumps: number, moveset: Moveset) {
        this.character = character;
        this.hurtbox = hurtbox;
        this.speed = speed;
        this.damage = damage;
        this.jumpHeight = jumpHeight;
        this.maxJumps = maxJumps;
        this.moveset = moveset
    }
}
class Moveset {
    neutralAttack:Attack;
    sideAttack:Attack;
    upAttack:Attack;
    downAttack:Attack;
    neutralSpecial:Attack;
    sideSpecial:Attack;
    upSpecial:Attack;
    downSpecial:Attack;
    constructor(neutralAttack: Attack,sideAttack: Attack,upAttack: Attack,downAttack: Attack,neutralSpecial: Attack,sideSpecial: Attack,upSpecial: Attack,downSpecial: Attack) {
        this.neutralAttack = neutralAttack;
        this.sideAttack = sideAttack;
        this.upAttack = upAttack;
        this.downAttack = downAttack;
        this.neutralSpecial = neutralSpecial;
        this.sideSpecial = sideSpecial;
        this.upSpecial = upSpecial;
        this.downSpecial = downSpecial;
    }
}


class Attack {
    damage : number
    angle : number
    knockback: number
    
}