//quản lý tuyển sinh
/**
 * input
 * điểm 3 môn:
 * - subject_1_num
 * - subject_2_num
 * - subject_3_num
 * - thresholdScore
 * - areaPriorType
 * - groupPriorType
 * process
 * - totaScore = subject_1_num + subject_2_num + subject_3_num + areaPriorType + groupPriorType
 *
 * - if (totaScore > thresholdScore && subject_1_num > 0 && subject_2_num > 0 && subject_3_num > 0)
 * => bạn đã đậu + totaScore
 *
 * - else bạn đã trượt
 *
 * output
 * tạo biến result chứa kêt quả hiển thị
 * dom tới thẻ p in ra result
 */

function scoreCalc() {
  const subject_1_num = document.getElementById("subject_1_num").value * 1;
  const subject_2_num = document.getElementById("subject_2_num").value * 1;
  const subject_3_num = document.getElementById("subject_3_num").value * 1;
  const areaPriorType = document.getElementById("areaPriorType").value * 1;
  const groupPriorType = document.getElementById("groupPriorType").value * 1;
  const thresholdScore = document.getElementById("thresholdScore").value * 1;
  const showInfo_1 = document.getElementById("showInfo_1");

  let result = "";

  let totalScore =
    subject_1_num +
    subject_2_num +
    subject_3_num +
    areaPriorType +
    groupPriorType;

  if (
    totalScore >= thresholdScore &&
    subject_1_num > 0 &&
    subject_2_num > 0 &&
    subject_3_num > 0
  ) {
    result = `bạn đã đậu, tổng điểm là ${totalScore}`;
  } else {
    result = `bạn đã trượt, tổng điểm là ${totalScore}`;
  }

  showInfo_1.innerHTML = result;
}
/**
 * input
 * số kw: KwNumber
 *
 * process
 * - 50Kw đầu: 0 <= KwNumber <= 50: KwNumber * 500
 * - 50Kw tiếp: 50 < KwNumber <= 100: (KwNumber - 50Kw đầu) * 650
 * - 100Kw tiếp: 100 < KwNumber <= 200: (KwNumber - 100Kw trước đó) * 850
 * - 150Kw tiếp: 200 < KwNumber <= 350: (KwNumber - 200Kw trước ) * 1100
 * - Kw vượt 350: (KwNumber - 350) * 1300
 *
 * out
 * biến chứa kết quả
 * dom thẻ p in kết quả
 *
 */
// tính  tiền điện
const first50KwPrice = 500;
const next50KwPrice = 650;
const next100kwoPrice = 850;
const next150KwPrice = 1100;
const restKwPrice = 1300;

function first50Kw(KwNumber, first50KwPrice) {
  return KwNumber * first50KwPrice;
}

function next50Kw(KwNumber, next50KwPrice) {
  return (KwNumber - 50) * next50KwPrice;
}

function next100kw(KwNumber, next100kwoPrice) {
  return (KwNumber - 100) * next100kwoPrice;
}

function next150Kw(KwNumber, next150KwPrice) {
  return (KwNumber - 200) * next150KwPrice;
}

function restKw(KwNumber, restKwPrice) {
  return (KwNumber - 350) * restKwPrice;
}

function KwCalc() {
  const KwNumber = document.getElementById("KwNumber").value * 1;
  const showInfo_2 = document.getElementById("showInfo_2");
  const name = document.getElementById("name").value;

  let total = 0;

  if (0 <= KwNumber && KwNumber <= 50) {
    const a = first50Kw(KwNumber, first50KwPrice);
    total = a;
  } else if (50 < KwNumber && KwNumber <= 100) {
    const a = first50Kw(KwNumber, first50KwPrice);
    const b = next50Kw(KwNumber, next50KwPrice);
    total = a + b;
  } else if (100 < KwNumber && KwNumber <= 200) {
    const a = first50Kw(KwNumber, first50KwPrice);
    const b = next50Kw(KwNumber, next50KwPrice);
    const c = next100kw(KwNumber, next100kwoPrice);
    total = a + b + c;
  } else if (200 < KwNumber && KwNumber <= 350) {
    const a = first50Kw(KwNumber, first50KwPrice);
    const b = next50Kw(KwNumber, next50KwPrice);
    const c = next100kw(KwNumber, next100kwoPrice);
    const d = next150Kw(KwNumber, next150KwPrice);
    total = a + b + c + d;
  } else if (350 < KwNumber) {
    const a = first50Kw(KwNumber, first50KwPrice);
    const b = next50Kw(KwNumber, next50KwPrice);
    const c = next100kw(KwNumber, next100kwoPrice);
    const d = next150Kw(KwNumber, next150KwPrice);
    const e = restKw(KwNumber, restKwPrice);
    total = a + b + c + d + e;
  } else {
    alert("vui lòng nhâp số Lw hợp lệ");
  }

  const rs = `Họ và tên: ${name}; tổng điền điện là ${total}`;
  showInfo_2.innerHTML = rs;
}

/**
 * in
 * tên
 * thu nhập năm: annualIncomeNum
 * người phụ thuộc: dependentsNum
 *
 * process
 * thu nhập chịu thuế = annualIncomeNum - 4e6 - dependentsNum *1.6e6
 * thuế phải nộp cuối cùng = thu nhập chịu thuế * thuê suất
 *
 * out
 * tạo biến chứa kết quả
 * dom thẻ p => innerHTML
 */

function taxCalc() {
  const annualIncomeNum = document.getElementById("annualIncomeNum").value * 1;
  const dependentsNum = document.getElementById("dependentsNum").value * 1;
  const showInfo_3 = document.getElementById("showInfo_3");
  const name = document.getElementById("name2").value;
  const taxableNum = annualIncomeNum - 4e6 - dependentsNum * 1.6e6;

  let taxPercent = 0;

  let finalTax = 0;

  if (taxableNum <= 60e6) {
    taxPercent = 5;
  } else if (60e6 < taxableNum && taxableNum <= 120e6) {
    taxPercent = 10;
  } else if (120e6 < taxableNum && taxableNum <= 210e6) {
    taxPercent = 15;
  } else if (210e6 < taxableNum && taxableNum <= 384e6) {
    taxPercent = 20;
  } else if (384e6 < taxableNum && taxableNum <= 624e6) {
    taxPercent = 25;
  } else if (624e6 < taxableNum && taxableNum <= 960e6) {
    taxPercent = 30;
  } else if (960e6 < taxableNum) {
    taxPercent = 35;
  } else {
    alert("Vui lòng nhập số tiền hợp lệ");
  }

  finalTax = taxableNum * (taxPercent / 100);
  const formatted = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(finalTax);
  const rs = `Họ và tên: ${name}; thuế thu nhập cá nhân phải trả là: ${formatted}`;
  showInfo_3.innerHTML = rs;
}

/**
 * in
 * láy loại khách hàng
 * số kết nối
 * số kênh
 *
 * process
 * - case nhà dân
 * total = invoiceFee1 + serviceFee1 + channelFee1 * số kênh
 *
 * - case doanh nghiệp
 * if số kênh <= 10
 *        => total = invoiceFee2 + serviceFee2 + channelFee2 * số kênh + connectsFee1
 * else if số kênh > 10
 *        => total = invoiceFee2 + serviceFee2 + channelFee2 * số kênh + connectsFee2 * số kết nối
 *
 * out
 * tạo biến rs chứa kể quả
 * dom => innerHTML = rs
 */
//nhà dân
const invoiceFee1 = 4.5;
const serviceFee1 = 20.5;
const channelFee1 = 7.5;
//doanh nghiệp
const invoiceFee2 = 15;
const serviceFee2 = 10;
const connectsFee1 = 10;
const connectsFee2 = 5;
const channelFee2 = 50;

function getType() {
  const type = document.getElementById("type").value;
  document.getElementById("connectsNum").style.display =
    "doanhNghiep" == type ? "block" : "none";
  return type;
}

function mainCalc() {
  const a = document.getElementById("channelsNum").value * 1;
  const b = document.getElementById("connectsNum").value * 1;
  const userID = document.getElementById("userID").value;

  let total = 0;

  const type = getType();
  switch (type) {
    case "nhaDan":
      total = invoiceFee1 + serviceFee1 + channelFee1 * a;
      break;

    case "doanhNghiep":
      if (b <= 10) {
        total = invoiceFee2 + serviceFee2 + channelFee2 * a + connectsFee1;
      } else if (b > 10) {
        total = invoiceFee2 + serviceFee2 + channelFee2 * a + connectsFee2 * b;
      }
      break;

    default:
      alert("vui lòng chọn loại khách hàng");
      break;
  }
  const rs =
    `Mã khách hàng: ${userID}; Tiền cáp là: ` +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);

  document.getElementById("showInfo_4").innerHTML = rs;
}
