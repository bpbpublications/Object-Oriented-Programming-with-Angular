
  function interceptor() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = () => originalMethod.apply(this, [911])
      return descriptor;
    }
  }

  export class Mobile {
    @interceptor()
    answerCall(caller: number): void {
      console.log('answering call from caller: ', caller);
    }
  }

  let iPhone = new Mobile();
  iPhone.answerCall(900);

  // Output
  // answering call from caller:  911

  // tsc --target ES5 --experimentalDecorators decorators.ts