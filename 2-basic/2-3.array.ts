
{
  // Array
  const fruits: string[] = ['๐', '๐', '๐'];
  const scores: Array<number> = [1, 2, 3];

  // readonly๋ Array<number>๋ ๊ฐ์ด ์ธ ์ ์์ด์.
  // readonly๋ ํจ์ ์์์ ํ๋ผ๋ฏธํฐ๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ค๋ ๊ฒ์ ๋ช์
  function printArray(fruits: readonly string[]) {
    // fruits.push('๐') readonly ๋๋ฌธ์ ๋ณ๊ฒฝ์ด ์๋จ
  }

  // Tuple -> interface, type alias, class๋ก ๋ณ๊ฒฝํด์ ์ฌ์ฉํ๋ ๊ฒ์ด ์ข์
  let student: [string, number];
  student=['name', 123];
  // ์ด๋ ๊ฒ ์ ๊ทผํ๋ฉด ์ด๋ค ๊ฐ์ด ๋ค์ด์๋์ง ์๊ธฐ ์ด๋ ค์
  student[0] // name
  student[1] // 123
  const [name, age] = student;

  // Tuple์ ์ด์ฉํ ์์ ๋ ๋ํ์ ์ผ๋ก useState๊ฐ ์์

}

