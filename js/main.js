console.log('Hello Parcel!!')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
// async라는 키워드를 통해 test라는 비동기함수를 만듦

test()