class Test {
  main = async () => {
    const promise1 = this.sub(true);
    const promise2 = this.sub(false);
    
    Promise.all([promise1, promise2])
      .then(values => {
        console.log("SuccessAll: ", values);
      })
      .catch(errors => {
        console.error("ErrorIncludes: ", errors);
      });
  }

  sub = async (bool) => {
    const obj = {
      A: Promise.resolve(1),
      B: Promise.resolve(2),
      C: Promise.resolve(3),
      D: bool ? Promise.resolve(4) : Promise.reject(5),
    };
    const [ sucessArray, errorArray ] = [[], []];

    return Promise.allSettled(Object.values(obj))
      .then(async () => {
        for(const key in obj) {
          const value = await obj[key]
            .then(value => sucessArray.push(`Sucess => ${key}: ${value}`))
            .catch(value => errorArray.push(`Error => ${key}: ${value}`))
            ;
        }
        if(errorArray.length) throw "errorArray.includes(reject)";

        console.log("Sucess!");
        return Promise.resolve(sucessArray);
      }).catch(errors => {
          console.log(errors);
          return Promise.reject(errorArray);
      });
  }

}

const test = new Test()
test.main();
