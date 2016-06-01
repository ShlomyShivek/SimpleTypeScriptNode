/**
 * Created by shlomy.shivek on 5/31/2016.
 */

namespace Comp.Mod {
    interface ITest {
        isOk(s:string):boolean;
    }

    export class MyTest implements ITest {
        isOk(s:string):boolean {
            return true;
        }
    }
}

export = Comp;