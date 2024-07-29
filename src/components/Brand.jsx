const brandImgs = [
  "https://s3-alpha-sig.figma.com/img/b8b9/38cf/688b272c77d18ae91c6ed238427e34a7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQVy15GH7s6zF8NMbqzgP8jNI6JA7I9qH8GqaIpXEOoMCTWdfHe9IwdVVsNRZ0L1ZBTpBm8RYHUKXlomBrOCprDqWj0LGzj-GTY8C~BlVo4pIoko9s9QmXG9PR31tzerDTSFE82lakYZYoEJgbRXLjmseh~UIsf~URl95DCAOiUgUE3DjDhvYskJRxpjzBpFGLbj54vRyszsZT3cSNQ1bhM7NmNEo3Hdw~JvRfaxXPZKdHNDKvjZ0dJswj0HRpWkzX681~mzF2En2qYSHArNc94nJjeRE9Sicu9Ggp-ZKx~BK~ItuZ-AFMRn~kQAKhg1hZzzBwiiBQpXNxn6U0XiTg__",
  "https://s3-alpha-sig.figma.com/img/b202/625e/22536627c7bc587c620ddbddb8abf54a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TchwcgWfhWPzLXn8kd7OzyGz2OxzmlMMW3rHTqAPo1TDOWNSGI24I1gg8j3Ih~nQsUt0egdRhSjqXFs44flNHqbxTsicr03qvtTQ5wAcR6QlRl-VjSWSHEEDmAUtQW64RR3JCObxmMdmCGb2m26TdWGfNqdnYroPAJVb4hPditHa3-DxrVs4yVEDIvYv3EQ9i1klTOE6CEKJsub~k54OwPMclg1s3T9Cz2rcoaG~3rCDhyVGjLcZeICEBG-SGFb9LIYtih7Fv~yPD4-uMY-nyQUhGaAoSsr1OonoTWHN0-gUrAB6qTDIh4aBdGQ0CpuFYWgmKm1EavmylZaj4Re6Ag__",
  "https://s3-alpha-sig.figma.com/img/5b6a/8263/f4ffb212815381c7e2b4d90e180aa81b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klhFdjfiohwj4Y3VFPNhfObsgdhRxbx0tm4n-UISTKPEKH03SW0VMzzwbm0V~LiYkb6N14gzTcEngeV8OtQZ362fWj3io6qSrADI-etRGPfSwFkMIvItlNJ-QRnqTJVpcxUtx~HPRHlTT4BWamdg4obnD1ZEM8dgHxdPL7ll63Eh8xKxWOkccCEuQ-tWLTGZYuNiNYfuQfbbvJDu7Brcg8QwL3ERINg1yFUVcA55AYWGrHKtt5879scwB7gxlhasyNzQ8aVDohtJlA3UgRXm7BCIus5O8QRDQccGqXyvmzsSzpz-igGo79Fx5~6oasycItPxdq1hBGGIHMwIfepTsA__",
  "https://s3-alpha-sig.figma.com/img/654c/fb1f/895680061bf848866c9c60bcd25c013d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hI24QkGJPzFxDM0v9WrhWnBJxp0Y52dJjqe3FFXgTXg0vEERwFxv~Z1T0wsNokooebcm~IdBGWeKEOZF4SNdNPD~DcPz-bBjFHxXaRNXO4-pjhasaVCraTkwwSQliubBf0sR2zMy1Ti03LTMdm-fYaHCzSQ9cv8HtmRI4loeRY3HJnthkrkveBDDuP1zeqFAriUAHBb8JtQgHKPSLHgWgqrjr-HTCB7O5zvPcAJSyR5Ip4UqcO~nFxWu2McnwbJ0Id5doV3lnvJ0UsyLl6blmdxpKMA~yH0dpRQ8jmJf3yfkdh-Pe0600TimvgYpLtQ5dcohL2ubSNhyivtVRmgnfw__",
  "https://s3-alpha-sig.figma.com/img/453d/23f0/125e550bcc4e14cd636dad1d11555422?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZxFt6sAZ4EtlSIN6QViHYrPQuU6yQz5tpy3Y1rtT37iFXgUblcoSLa5my4qjuOFAwbj4FFVOYeHavfxvu9VMSb8FG8yaKdfXy08R7dTGymMvmwkV78UKv8Q1TIiycnFV7vVNwMRTik-9VsFol5uH0F83yYcMY-H6RP1ogaTlPgDDRkYPQVX-qSuB1MBfJzx5RW~ZlsYcMilBRvJkPu4ZEnkyFv8eMkcUUCsavI0wF1RXLG323YxlLSZ0hDu2uSY8sill-Is1bQp3i1yftPP68J63dJLPs2mK9trr3wXJaEu~CvA8sFYjX2vdZzuRW~ujhkKL15WWBaE5FF-8rK09A__",
  "https://s3-alpha-sig.figma.com/img/2a84/ed0c/6bc87f453a67a7b4c34edb67eebcb005?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOI7VKbHU9tB5L3uYVfsKCkbT1hTHlm7KgigZUbq1rrvi4J7Moo8q2GP6L1SUCmbTzbRieS6yF-G4W4paPaSfyxwmBOAcgbsU8Yy3AjEwG-iEFSUPIwlDd1Kq9HkIrejZxw4HpjXKNNY0DIC-WDGrg-ddePi7AoQmB9USamsaZuervpBsq91Nq0~LrYsjJyNiVuLXUhDKpy-u7e-XTZdlrr6t9WwaCiBW46SrRC5twKuZFtIJ98Eot3TuOdaXRr6a4hwD-BKT49XMJAIhXZMp-WENMgB52liDkGNIzrkY4IUsp~mHkK5fKUeaanXIeQLnuVaRZkjKvpUiIUaPeYeFg__",
  "https://s3-alpha-sig.figma.com/img/f785/0702/0a1239aea19441a0ce5800faefb3f9bc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dgsf42KVbwO2blsByKzUX4zPkWGx5v24zyWhj8UQBos4FEK2xXvKMTUClv3piNmyCl5ehv7KohKjGRzzwrISFyUFGRH9zJYbl3E9G8tbyeFdjW~ipV8itOY4zE-in8bJyiXEPENCpRNRYrQdvdxGWOEbpx3IQBnDla3DevtqVVgABVwwMlgIcDF7dx-pZfxx21ASrhsZhnEIITNgyBNBSSAHlVP3xTzo7tpWbvwI5E0RFGIiAVCPbdCvsDzUa4lSGW2usRFQHAF5lVdLG9THpKmByKAbyNJocW5-~Dop3VXCCzvVO-GHzzIyEilYCFAV~n9-xtjyFvfcNjff5wTgcQ__",
  "https://s3-alpha-sig.figma.com/img/f7f8/648a/f8f8926a57badeaab81cfa74864d7e79?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhbxBErTJqm2YqDu1ZkcxzM2~TzxCkRu6o8yAKyrlwG9faUyEDwnhdCB1txBuf2mfEVLO7kFEsVWdE6lKMY90ngOZI3kAW115Y4ajOWVdW2pR0lc5UVDfMjC63KRdTMQkz~KDekX~e5hWyz3NIop9WpmVoQOKKVjemlqI~2Nhp-cUvTh4EAhvz5j3s7Cv-iE4VfPYf5LizYzxNnnQPbr7smTz4prw9F8TI8vOILPAdvK7JEzLuHNapmc08WC713rQICQIomNoVkzkLxqE1hRjHXu~EDpLeNITeJ7bVOq5dOoe8SJ9t0cdNowyGlubaCZSNw7CZIkiIG62RMnZNo0yQ__",
];

const Brand = () => {
  return (
    <section className="px-[150px]">
      <h1 className="text-[32px] leading-[39.01px] font-bold text-center">
        Brand
      </h1>
      <div className=" grid grid-cols-4 py-[50px]">
        {brandImgs.map((brand, i) => (
          <div className="w-[285px] h-[340px] relative" key={i}>
            <img src={brand} className="w-full h-full" alt="" />
            <h1 className="text-sm font-semibold w-full font-poppin text-center absolute top-[45%]">Brand</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
