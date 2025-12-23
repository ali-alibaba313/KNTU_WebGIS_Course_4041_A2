<h2 dir="rtl">مقایسه و انتخاب APIها</h2>

<details open>
  <summary dir="rtl"><b>مقایسه APIهای ژئوکدینگ (کلیک کن)</b></summary>

  <br />

  <table dir="rtl">
    <thead>
      <tr>
        <th>API</th>
        <th>پلن رایگان</th>
        <th>هزینه پلن پولی</th>
        <th>هزینه به ازای ۱۰۰۰ درخواست</th>
        <th>مزایا</th>
        <th>معایب</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>OpenMapQuest</b></td>
        <td>۱۵٬۰۰۰ درخواست</td>
        <td>پرداخت به‌ازای مصرف</td>
        <td>۴٫۵ دلار</td>
        <td>ساده، مستندات واضح، مناسب تمرین</td>
        <td>گران‌تر در حجم بالا</td>
      </tr>
      <tr>
        <td><b>LocationIQ</b></td>
        <td>دارد</td>
        <td>۹۹۰ دلار سالانه</td>
        <td>≈ ۰٫۱۱ دلار</td>
        <td>خیلی ارزان در حجم بالا</td>
        <td>نیاز به اشتراک</td>
      </tr>
      <tr>
        <td><b>OpenCage</b></td>
        <td>۲۵۰۰ درخواست/روز (آزمایشی)</td>
        <td>پلن پولی اجباری</td>
        <td>بالا</td>
        <td>کیفیت داده خوب</td>
        <td>محدودیت شدید</td>
      </tr>
    </tbody>
  </table>

  <p dir="rtl"><b>انتخاب نهایی ژئوکدینگ:</b> برای این تمرین از <b>OpenMapQuest</b> (پلن رایگان) استفاده شده است.</p>
</details>

<hr />

<details>
  <summary dir="rtl"><b>مقایسه APIهای هواشناسی (کلیک کن)</b></summary>

  <br />

  <table dir="rtl">
    <thead>
      <tr>
        <th>API</th>
        <th>پلن رایگان</th>
        <th>هزینه پلن پولی</th>
        <th>هزینه به ازای ۱۰۰۰ درخواست</th>
        <th>مزایا</th>
        <th>معایب</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>OpenWeatherMap</b></td>
        <td>۱۰۰۰ درخواست/روز</td>
        <td>پرداخت به‌ازای مصرف</td>
        <td>۱٫۵ دلار</td>
        <td>رایج، مستندات قوی، مثال‌های زیاد</td>
        <td>سهمیه رایگان محدود</td>
      </tr>
      <tr>
        <td><b>WeatherAPI.com</b></td>
        <td>۱٬۰۰۰٬۰۰۰ درخواست/ماه</td>
        <td>از ۷ دلار/ماه</td>
        <td>بسیار کم (در پلن رایگان)</td>
        <td>سهمیه رایگان بزرگ</td>
        <td>مثال مستقیم تمرین کمتر</td>
      </tr>
      <tr>
        <td><b>Tomorrow.io</b></td>
        <td>۵۰۰ درخواست/روز</td>
        <td>از ۲۵ دلار/ماه</td>
        <td>بالا</td>
        <td>داده‌های پیشرفته</td>
        <td>گران و محدود</td>
      </tr>
    </tbody>
  </table>

  <p dir="rtl"><b>انتخاب نهایی هواشناسی:</b> برای این تمرین از <b>OpenWeatherMap</b> (پلن رایگان) استفاده شده است.</p>
</details>

<hr />

<p dir="rtl"><b>مدیریت کلیدهای API:</b> کلیدها در کد هاردکد نشده‌اند؛ در فایل محلی <code>config.js</code> قرار می‌گیرند و در <code>.gitignore</code> هستند.</p>
