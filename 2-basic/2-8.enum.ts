{
  // Enum
  // javascript엔 enum이 없어요. 그래서 typesctript에서 사용됨
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });

  // tpyescript
  // enum은 되도록 안 쓰는게 좋습니다. 차라리 아래처럼 union를 이용하세여
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday = 1, // 0 기본, 만약 1로 시작하는 걸 원하면 1을 작성해주면 됨
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday);
  let dat: Days = Days.Friday;
  dat = 10; // enum을 사용해서 만든 변수에 다른 값을 넣어도 그 값이 넣어짐..! 🥵
  console.log(dat);

  let dayofweek: DaysOfWeek = "Monday";
  dayofweek = "Tuesday";
}
