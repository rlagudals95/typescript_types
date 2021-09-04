{
    // 필요한 데이터들이 밖에 나뒹굴어 다닌다...ㅠ
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    const BEANS_GRAMM_PER_SHOT: number = 7;//한 샷당 필요한 커피콩 수
    let coffeeBeans: number = 0;


    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) { // 커피 콩양이 필요양 보다 작다면
            throw new Error('not enough coffe beans!');
        }

        coffeeBeans -= shots*BEANS_GRAMM_PER_SHOT; // 만든 만큼 콩을 제거

        return {
            shots,
            hasMilk: false
        }
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT; // 커피콩 채워주기

    const coffee = makeCoffee(2);
    console.log(coffee);

}