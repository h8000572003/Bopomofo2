# 句子／新聞朗讀完成的星星改為只發放一次

`markSentenceCompleted`／`markNewsCompleted`（[useLearningState.js](../../src/hooks/useLearningState.js)）原本會在每次呼叫時都加星星，即使同一個句子或新聞早就完成過；`markWordCompleted` 與 `toggleFlashcardMastered` 則早就是「只在第一次完成時發放」。這是同一種「id 清單完成追蹤」語意下的行為不一致，在收斂 `useLearningState` 進度紀錄動作群（改用共用的 `recordEvent`／`recordCompletion`）時一併修正為跟其他兩者一致：重複朗讀同一個句子或新聞不會再無限加星星。

這個修正是靠 TDD 的紅燈測試直接證實的（先寫出「重複完成不該再加星星」的測試，在舊程式碼上跑出紅燈，才動手修）。已經因為這個 bug 存在使用者 `localStorage` 裡的星星數不會被追討回來——這是刻意的取捨，只影響往後的行為，不做資料回溯修正。
