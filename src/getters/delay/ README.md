# How to use duration.getDelay(value [,Int[,String]).

Types of Options formats are:
---
__Y__ : returns delay in years.

__D__ : returns delay in days.

__h__ : returns delay in hours.

__m__ : returns delay in minutes.

__s__ : returns delay in seconds.

__ms__ : returns delay in milliseconds.

_Note: all date formats shortcuts should be capitalize._

Value -integer- required amount of time required for delay type:
---

getDelay('200s');
getDelay('1000m')
# How to use duration.wait(time(Options[,String])).then(()=>...)

wait is promise resolves himself after the amount of time given in options. wait will invokes getDelay(), to get the specific time then wait using setTimeout(). After finishing will resolves to do whatever next in the cod.

wait('2h').then(() => console.log('Hello!')); // 'Hello! will be printed after one hour'
