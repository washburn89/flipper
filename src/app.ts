import RandomOrg from 'random-org';

export class App {
  public random = new RandomOrg({ apiKey: 'ab5f7285-94f1-4c60-8b1d-a8d4a343745b' });


  private async singleCoinFlip(){
    let boolresult;
    let stringresult: string = 'no coin flipped';

    boolresult = await this.random.generateIntegers({n: 1, min: 0, max: 1})

    if (boolresult = 0){
      stringresult = 'tails'
    }else{
      stringresult = 'heads'
    }
  }
}
