(this["webpackJsonpwetradeup-app"]=this["webpackJsonpwetradeup-app"]||[]).push([[0],{1:function(e,a,n){e.exports={comparison:"Comparison_comparison__3GouA",isa:"Comparison_isa__QEXlf",loan:"Comparison_loan__3Hm6k",title:"Comparison_title__1wbqk",info:"Comparison_info__2CyjN",infoLine:"Comparison_infoLine__3lXE2",infoLabel:"Comparison_infoLabel__1r-RW",infoValue:"Comparison_infoValue__21177",subtitle:"Comparison_subtitle__3ilI3",emphasis:"Comparison_emphasis__1Cz4K"}},2:function(e,a,n){e.exports={monthlyComparison:"MonthlyComparison_monthlyComparison__33203",title:"MonthlyComparison_title__1fyKp",container:"MonthlyComparison_container__1q4oR",legend:"MonthlyComparison_legend__1TJ8w",tile:"MonthlyComparison_tile__1y5wl",monthlyBreakdown:"MonthlyComparison_monthlyBreakdown__2pzk6",months:"MonthlyComparison_months__T7OJf",year:"MonthlyComparison_year__3njt4",month:"MonthlyComparison_month__1gZM-",income:"MonthlyComparison_income__2l1rT",isa:"MonthlyComparison_isa__2mcj8",loan:"MonthlyComparison_loan__2Jyxi"}},22:function(e,a,n){e.exports={container:"App_container__16xz_"}},28:function(e,a,n){},3:function(e,a,n){e.exports={controls:"IsaLoanCalculator_controls__1EhuJ",programSelect:"IsaLoanCalculator_programSelect__1VuGU",label:"IsaLoanCalculator_label__4MeJw",info:"IsaLoanCalculator_info__1ARnb",infoLine:"IsaLoanCalculator_infoLine__2V1ok",infoLabel:"IsaLoanCalculator_infoLabel__1wqsI",infoValue:"IsaLoanCalculator_infoValue__7rwC_",salaryInput:"IsaLoanCalculator_salaryInput__1ji0w",salarySubtext:"IsaLoanCalculator_salarySubtext__3_CkL"}},47:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n(5),c=n.n(s),i=n(21),l=n.n(i),r=(n(28),n(22)),o=n.n(r),h=n(10),j=n(8),b=n(6),m=n.n(b),d=n(7),p=n(9),u=n(3),C=n.n(u),x=n(1),A=n.n(x),E=function(e){for(var a=e.program,n=e.isaMonthlyPayments,s=n[0],c=1,i=Number.parseFloat(s),l=1;l<n.length;l++)n[l]===s&&c++,i+=Number.parseFloat(n[l]);var r=i.toFixed(2),o=(100*Number.parseFloat(a.loan_interest)).toFixed(2),h=a.loan_monthly_payment?"$".concat((a.loan_monthly_payment*a.isa_length).toFixed(2)):"...";return Object(t.jsxs)("div",{className:A.a.comparison,children:[Object(t.jsxs)("div",{className:A.a.isa,children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:A.a.title,children:"ISA"}),Object(t.jsxs)("div",{className:A.a.info,children:[Object(t.jsxs)("div",{className:A.a.infoLine,children:[Object(t.jsx)("p",{className:A.a.infoLabel,children:"Take "}),Object(t.jsxs)("p",{className:A.a.infoValue,children:[(100*Number.parseFloat(a.isa_take)).toFixed(2),"%"]})]}),Object(t.jsxs)("div",{className:A.a.infoLine,children:[Object(t.jsx)("p",{className:A.a.infoLabel,children:"Threshold "}),Object(t.jsxs)("p",{className:A.a.infoValue,children:["$",a.isa_threshold]})]})]})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:A.a.subtitle,children:"Monthly Payment"}),Object(t.jsx)("span",{className:A.a.emphasis,children:"$".concat(n[0].toFixed(2))}),Object(t.jsxs)("span",{children:[" for ",c," months"]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:A.a.subtitle,children:"Total"}),Object(t.jsx)("span",{className:A.a.emphasis,children:"$".concat(r)})]})]})]}),Object(t.jsxs)("div",{className:A.a.loan,children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:A.a.title,children:"Loan"}),Object(t.jsx)("div",{className:A.a.info,children:Object(t.jsxs)("div",{className:A.a.infoLine,children:[Object(t.jsx)("p",{className:A.a.infoLabel,children:"Interest "}),Object(t.jsxs)("p",{className:A.a.infoValue,children:[o,"%"]})]})})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:A.a.subtitle,children:"Monthly Payment"}),Object(t.jsx)("span",{className:A.a.emphasis,children:a.loan_monthly_payment?"$".concat(a.loan_monthly_payment):"..."}),Object(t.jsxs)("span",{children:[" for ",a.isa_length," months"]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:A.a.subtitle,children:"Total"}),Object(t.jsx)("span",{className:A.a.emphasis,children:h})]})]})]})]})},O=n(2),g=n.n(O),I=function(e){for(var a=e.salary,n=e.isaMonthlyPayments,s=e.loanMonthlyPayment,c=a/12,i=new Array,l=0;l<n.length;){for(var r=new Array,o=0;o<12&&!(l>=n.length);o++)r.push({month:l+1,isaPayment:"$".concat(n[l].toFixed(2)),isaRemainingIncome:"$".concat((c-n[l]).toFixed(2)),loanPayment:s?"$".concat(s.toFixed(2)):"...",loanRemainingIncome:s?"$".concat((c-s).toFixed(2)):"..."}),l++;i.push(r)}return Object(t.jsxs)("div",{className:g.a.monthlyComparison,children:[Object(t.jsx)("h3",{className:g.a.title,children:"Monthly Comparison"}),Object(t.jsxs)("div",{className:g.a.container,children:[Object(t.jsxs)("div",{className:g.a.legend,children:[Object(t.jsx)("p",{className:g.a.year,style:{color:"transparent"},children:"year"}),Object(t.jsx)("p",{className:g.a.month,children:"month"}),Object(t.jsx)("p",{className:g.a.income,children:"income"}),Object(t.jsx)("p",{className:g.a.isa,children:"ISA"}),Object(t.jsx)("p",{className:g.a.isa,children:"remaining"}),Object(t.jsx)("p",{className:g.a.loan,children:"loan"}),Object(t.jsx)("p",{className:g.a.loan,children:"remaining"})]}),Object(t.jsx)("div",{className:g.a.months,children:i.map((function(e,a){return Object(t.jsxs)("div",{className:g.a.monthlyBreakdown,children:[Object(t.jsxs)("p",{className:g.a.year,children:["year ",a+1]}),Object(t.jsx)("div",{className:g.a.months,children:e.map((function(e){return Object(t.jsxs)("div",{className:g.a.tile,children:[Object(t.jsx)("p",{className:g.a.month,children:e.month}),Object(t.jsx)("p",{className:g.a.income,children:"$".concat(c.toFixed(2))}),Object(t.jsx)("p",{className:g.a.isa,children:e.isaPayment}),Object(t.jsx)("p",{className:g.a.isa,children:e.isaRemainingIncome}),Object(t.jsx)("p",{className:g.a.loan,children:e.loanPayment}),Object(t.jsx)("p",{className:g.a.loan,children:e.loanRemainingIncome})]})}))})]})}))})]})]})},N=function(){return Object(t.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhQAAACjCAYAAADSKocBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFzmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDEtMzFUMTc6MTY6NDktMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDEtMzFUMTc6MTY6NDktMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAxLTMxVDE3OjE2OjQ5LTA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4MTMwMDhkLWM2NDAtNDY5Yi04YzBmLWYxNTEzMzQ2YzRkYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkxNjQzZWY1LTZhZWItM2E0Zi1hNmIxLWRlOTRlMjdmZmM4MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkzODQ0NmZkLTU5MzctNGE0OC05MmY2LWRkMTdmZGM0ZGJjYyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzODQ0NmZkLTU5MzctNGE0OC05MmY2LWRkMTdmZGM0ZGJjYyIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0zMVQxNzoxNjo0OS0wODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4MTMwMDhkLWM2NDAtNDY5Yi04YzBmLWYxNTEzMzQ2YzRkYiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0zMVQxNzoxNjo0OS0wODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ud5iSQAAHIxJREFUeNrtnXnYHEW1h98vCVlMQshCVgwkBpCALJGIypLggmwiKApBxQWQTUBRBEHwCldEXBC9KveKXBSNghDZAgREBIGw75tRBBIStiRkgyR8y9w/Ts11HL5tpqq7qmd+7/PUE0zs6dOnq6t/XXXqnJZSqYQQQgghhA995AIhhBBCSFAIIYQQQoJCCCGEEBIUQgghhBASFEIIIYSQoBBCCCGEBIUQQgghJCiEEEIIISQohBBCCCFBIYQQQggJCiGEEEJIUAghhBBCSFAIIYQQQoJCCCGEEKmg8uVCCCEKxnjgJveniKQdqpsEhRBCiCIxBHgMKLk/h8glEhRCCCFELQwAbnFiotxucX8vJCiEEEKIHukLXFMlJsrtGvfvQoJCCCGE6JbZXYiJcpstF0lQCCGEEN1xTg9iotzOkaskKIQQQojOOKWXYqLcTpHLJCiEEEKISg6uUUyU28FynQSFEEIIAbAP0FqnoGh1xwsJCiGEEE3MDGBtnWKi3Na63xESFEIIIZqQqcAqTzFRbqvc7wkJCiGEEE3EJGBxIDFRbovd7woJCiGEEE3AOODpwGKi3J52vy8kKIQQQjQwlfU5smqq+yFBIYQQooHprD5HVk11PyQohBBCNCDd1efIqqnuhwSFEEKIBqOn+hxZNdX9kKAQQgjRIPS2PkdWTXU/JCiEEEIUnFrrc2TVVPdDgkIIIURBqbc+R1ZNdT8CCYqWUqlES0vLcGCQXFS7T4EX5AZRAAYBwz2OfwlolxtzpT8wyvM31gPLErqmfYArgX4J2dQG7A/MVZerTVB09ZeXJqYYi9JWqVuJgvApz74+RS7MnZmE2SaZCiHqc2TVVPcjwAxFH7lFCCFExkzFtmsOTNS+gc4+1f3wQIJCCCFElkwCbgKGJm7nUGen6n5IUAghhEiMccCfgPEFsXe8s1d1PyQohBBCJMIQ98U/uWB2T3Z2q+6HBIUQQojIDMBiErYuqP1bO/tV90OCQgghRCT6Apdju1SKzEx3Har7IUEhhBAiApcA+zbItezrrkdIUAghhMiRc4BZDXZNs1DdDwkKIYQQuXIK0BKgnRfAlhMD2dKCan5IUAghhBBCgkIIIYQQEhRCCCGEkKAQQgghhOgl5RKy84ClkWw4DP/kIRcB6yLYvk5dSAghhPiXoLjItRgcHEBQnAQs1+0UQggh4qAlDyGEEEJIUAghhBBCgkIIIYQQEhRCCCGEEBIUQgghhJCgEEIIIYQEhRBCCCEkKIQQQggh4F+JrUTxhODGwFhgA6ANeB3LdppKgq8W4C3AkIrWF1gNrHJ/vq5bSQswEhgDlICX3D0syTVBnpNRwDigw/W7ct9rk3tEARkGjHdj6YvAspTGCgmKYjAc2BPYF5jhhETfLv6/a4CfAKfmZNc2wOZVbTNgqHtZdkebE0FPAU+69gTwCPBKA97HbYC9gF3doDAWGO1EYSWtwMtuwHgJWAzcDNwArNTj8CZ2BD4ETHB+He9ExNhuxriFwOPAY66//cn5W4gUPjLe68b7zSr69Hj3kVY9Vrzk+m65vQD8BbgVaJegSJvt3E2ulXbg2hqPmQ6c5jpW314eM8QNpFl98U134mYv9999PPvfWNdmVvx9CbgHuMb57OGC9pXBwB7OV3sBm/TyuA3cy3FCxd8d4QaPvwJXO9/8s4mfwx2Ag4CPA5PrOH6ia3tV9Ll7XX+7DPibhjrheJcTqPVwVS//f33dh8aBwEdrON8GblypHltOdx9rVwKXA39240e2lErRZ0vKUzY+bUSO9v68Thtrmd6f7r5G6/VH6Los7wB+5TpoKUJbCJyV8332YRDw1Rz89ThwXC/F5qc8zzUlAb9uAXwb+HvGfu1wwuJ9ka93ZoBruaWgL/EfBrj2LweyZY6HDT3N0k4AforNSGbZp5cDFwMfCKkdqpsERVqCoj9wNrYU4OOPUIJiB/cwdUQSEtVtlfPPqEQHwf7AMcCSnP3yMLBLAwuKIcD33BdW3n3uPuCdEhQSFIEFxWDgTOC1CH36KmBTCYrGFhRTgYcCdRhfQbE1NqVeSrStBr5BWruUDgSeieiTDjeLNKbBBMXHgecj97dWN0PWX4JCgiKAoNgKWBC5T78GnMyb47e8BIW2jabBrsCdWHxGbD6JxS/sm7C/hrgB/npsh0RMWpwtf6C+2JqQdhyKrf0f34up1tTZHJiHxTNMiGxLPydg7wOmabgSHnwYuNv175i8BTjHfcTuFupHJSjisx9wI7YdKCYbAD8GfsObI4lTZQ/gASzmJAYDgd+7l00qDAPOd7MVfQv6TBwJPOrub0q8w70MzowwWyEaQ0z8EdsBlwpTsd0g35KgKD4fAq5wL6aYjMWmRo8roA8nAreTfwDdGGxr1icS9cunsVmTor34TgEuAAYkal8/LIJ+PsUJEhbxme4+PlIV+WdgAc8SFAVlK+BS4m/dHYhFtO9cYF/2x6bGN8tRxNwN7JS4Xw7AIruLwjnAdwpi6zRsSWZDDWWiB0a7MTb1md9T3TMoQVEwNsKCHoclYMv/EC+KPSQjsT3XWT+0GzjxsmlB/DILy2GRMn2wYOeTC9bndgTmUpwlQhGH85yoKAInA+dKUBSLs4G3JWDHCdjUeKOwHXBhxuc4l/RnJqo5H3h3orb1w+J2jipon9vFCdkBCPFmPgQcUjCbT6pXVEhQ5M80LOgsNjOB7zegf2dhwXNZcADwpQL6ZBBwbKK2neHuWZH5IDZrpczDoprZBbX7JP6VRbamrwORLz9IRMidn8H9fw24CXgWWOTaQvfnKqz2x4iKP7cC9nZfzyF9chzwhcDXNhn434zuRRu2xvqQ89Xz7s/F2HR6uS7FOCwN8AEUZwq1O3YmbM2ZErbr52qsRke5xsHL2FbjcjrzSc6HuxJue+1+WDDp4RriRAXD6xwPbsVidBZV9OOXsKDOiRVtSywFfRYBwhdgOYnW9P4JVGKrWvFJbDWZfJKW9JTY6v2Bz/cP4EQsNqQeRmDTgrPxzxJa9nXIPtEHy0EQ+j49i9VqGVuHPbthReDW5tSnQie22pBwicAWuhmYWvNVbAJ8hbCZTXcP6KOZKLFV0RNb1dJuAD5bx9g1AMsfdFsGNv1Xd9pBmTLjCopveFxjG7Y3f54TDP+J7R3+ERbJPxdLavRGLwTF3ECd7VYsAVbI2YVp7ivT17aTAtp0YOCH9FXg4EB+m4wl+CqaoLgkgE0rsCAy323XQ91zFELMPkm4rboSFM0hKJ4lXCLBdxG21k0HXewAlKCIKyjaqb0AzBtOtR4BbNxL+/r2MM22JWFqc5xNdks3A7Fy3T723RzQngcIWxtiUgY+O5Bsi5GFFBSzAthzO+GXfbYPNGsSahlHgqKxBUUHtgQ+OLDvhgYS7JUieYAERVqCotb2e7JJORzC/hNy8PNg4H7PZZgQ7Bnwnv6cbHcDbAu8krigGOFmFnxsmZ2hH8dj8Re+S26bSVBIUPTQjsnYh58JNOtWwpa0JSgKKCgeJ+w6bDULPe27Ikdf+8R6rCNMwF2odckLc/LZthnNVIQSFKfhv6abdZ2S4cC9nnZeI0EhQdFNOy0nPx4RyN4F1c+dBEX6gmIu2abhHhrgyyvvYlx3etg7zvPcuxAu1iTPFNjbEb4scghBMRCLVvfxY1470yYCyz19trcEhQRFJy3v7fpnBbJ7954EhfJQpMMcbCvbugzPsZXn8bOdAMwTnwFxoue5vx7A/meAj2HxMHnxMFZvIjU+Tdfl1XtiCVY3pS0nWxcCh3n+xtEa1kQVj2H1avLkdOC3AX6nx/xJEhRpcJkbLLN+6Uz1PP7CCL55xuPYUR7HDsfiJ0K8RJdG8Nv5WAxKKrRgWzTr5ShsH36e/BGr2love9L7YGrRHByfoyiu5LgAH4MH9NSfJSji86z7EmrP4Vw+gqIV2+2QN4s9X2L1MiPA83ENcEekftWOJVlqS6Sf74ftMKqH+YSJSaiHszyezX4UL+2yyPbDMdYS1KvANz1/oz8W6ClBkSgl4HPUkonMD58ljyfJd9q+zIRI98Y3MLaD/AKvuuIhwkx1hsBnduLUiHY/jVUFrpdDNcwJJ+xPimzDBVjQvw+H96SgRTx+Avwlx/N92WNwXhXJR1MinddXUMzGEpHF5sKevipyYCQW4FoPd+X8jHTGdz1mGqZh6YsfRzQz87C4nJi0Y3FhV3v8xpZYsPsLEhRpsQrLnJkn/yign6ZFOOfGwDaev/GzRPx3O7bla4uINsyk/uWnKxLw4SOePjyU4pVmF2G5JBE7rsNikcZ4/MZOWIXdN6Elj3hcDKyWG7rlA1glxyK9AHHq/a6E/PjLyOd/n8exVybiw2s9jp2lR7mpWQlclYgt7cDvPH/j3V39gwRFHLotuiIAyy0Sy0e+yx1XuXucCr+LfP56BcUTpDOr5hMU+lb8dhyJYnMF2aYDqBXf2RIJisS4ASvgIjpnZyygcMtI59/F8/grE/PnIrpY88yBccDb6zz2wYR8OB8LtK2XqXqsm5bbErPnAayQZL3siNWMkqBIhF/LBW+iBVviuBQLwntrRFvGehzbSprZCe+LdF6f5Y6FCflvvRNmEhSinhd4atzucexguogxk6Ao3s1sFAZjAZdHO4H1LHATluArZrBwC36p3BcQZ3ttT8RKcrWbx7HPJebDBRIUokbWYVvuG+0DY3pnf6ldHvnzHPB8k1zrKGDzijYFmIyV7041g+AwupjO6yVPJHpdsWYofNKfTwEOTsiHPuPl1hr6mpJHSSe5XMjxYLwERRrc0WDXMwDbTjcVWyvfokJAbFTA6/EtNJdqvoFYX0k+wvGrDfScxJqhKOosdKPMnj+SsNBpBTYIOU5KUORPUZc7NnSCYSqWcbPcJnl+0aeGbzXVVGcoVhRQUDQSY7H6MK/mfN7BBfXX4Aa570sTtWs98E/qD3wfLkGRBk8VxM5+2G6LfVxrljVgX0HxQqLXtVKCIjobRxAUQwrqqyENcs9XJmzbco9jNUORCK8mbt904ERgLyyeoNnwXfJYleh1tWM1Y/IcqAcDg/TI/9tXoV7MEhSpsMLjWM1QNIAqzJJdsVTgezT5/fGdoViV8LWtzHmgVjInCYpmFxQpjwc+H7edCgptGy3WTcyCzbC8D7clKCZipCb3XbtNeQDJ2zYtd0hQ1MvQBrnnKc9Q+LyLRkhQxKeNtOp37IHlJ5iRmJ/+BhwG7FnAl+5rCfe/ATmfr0OPvJegeD3AOftSzGWnEEJobQLXkXLAus/7v78EhdRqmRasjPn1+McMhGIxVlb3Y1gA6EXESRDluySVcnT6RgXzZaNRaz2HUDsEijhLEcLmV5rwmauFDT2O7XR2QzEU+dKeiB3nEm+P/1LgadeewNLSPoCV1E0B3yWp4Qm/SPMOsl2mR/7/aaP2GZtQL8QhibxcJSgaR1CskKAQAB/JWEyU3GzD01ilyKer/ntl4v7xFRSpDiBDyX/6dbV7kdY7ziwhzLR/Crxep//W479UVcR4hEYRFMMT9rHPB4ZmKASTgIsz+PK6HwvqvA1L3LWiwD4KMUORImMinXc5MLrOY4/BSsE3M68Am3j+xsiCXbNv+nvNUPQOn+VuCYompy9wWcAO/ixwNjCbtAMR8xYUmyV6XdtHOu8yD0ExQo8tSwMIim1JswJuV2wX4Dc6SGPpcVLC74PNQ4+TCspsHvbC6tiHEBJfwGp2/KLBxAT4z668M9HrmhbpvD6D+kg9tkG+snco2DXvEKjfpbDLaMdEfTwFv6U0CYom5/MBfuOnFUKitUH91OZEU9Fe3Km+VHx2KkhQSFDE9FsIxgETEvTxNp7HL5KgaF42Bvb1/I0fAF9sYCFRyd0ex25LmkuJsYTOgx7HTtWjy8sBfmMq+ecgiS0oXk7oelKcpdja8/j7JCial09Sf5lasG2dJzeRv3wExcAEvwinU38cgy8+1XXfo0fXqy+W6QfsXpDrHR/gZRfKbyGfv9R4n8exrcDDEhTNy0Gexx9FOjk0ijCIH5TY9RwS8dx3YctI9bAxttbbzNxImFiAYwtyvUcRZofH9Qld04GJ+Xg0VrupXh6niyRtEhTNgU+k8WPAvZHsHhjpvA/gt7QzK6Fnqw/wiYjnfw2/ZY+dm/zZXQ7cE+B39ibdHQdl+mMB376sBu5I6Lq2BN6bkD37e45P93U32IjGph9+RZouj2j7ppHOuw54xOP48cDMRO7/DGdPTHyWPQ5J6FnawIncelrsr+0+WF6PlDmQMPlSbia9WK/PJ2TLxzyPl6BoYsZ63ucHI9o+OeK5fZc9PpfI/T8xARv+6nHsB4G3JXANg7EMsGvraL4zfKGm7w8jXoKz3oi1UBl8r0/w+j5BGnV+tsAvfoLu+rMEReMzzvP4mDU2No94bt9B6RDCJOjxYXf8d/eE4A4sJXs9tBBmGtyXL1L/TN/Vnue+nzCFwoYDvyPNCpjfJ1ww8w0JXt9Q4tVPquS7+O1Cex54qMt/LZVKsS9wmRtsfFqeGfV+7mFnjJfzRzx9G2uWYDi2Fupju8/LtC+219rn/H+O+Fy1YFOTpUDNNzjyBo9zLyVuTopyca167X9XABt+E/BenpPYy/aggNf2eAb2zQlk2zosniIWuwS4hu9UaofqphmKxse3wuS4SHZ/kbhll9uxEuq+MwT7R7L/U6SVtfM8j2NHAj+KaPuxwKg6j11CmKDmywJez9eA/RLpF1sBFwb8vctIlwHAfzuxH+MD4/sBfufX3f6rZigafoZiT0/fHhbB5tGeX4QhZigAJjph4WPDIvIPinwHsCrgV1+IGQrc16OPDfsUcHbigoC2zA94P1dj+WlisnOAWcDK9gp+JbmznqEotxjBsd8NYPe91dqhuklQNL6g2NbTt/NytncQlrsgxIMbIn5gbgA7HiK/EtJjgecCD4ChBMURnjY870ReXvQFLvW0ebeA9uyWwX29CHhLzs94H+BULD9JyGs5ISN7QwuKNvLNVXNEILuPk6CQoBgVwL/75DiAXxHwwd0/gE0fCWTLjfhlK+2tGLsng5dOKEExKMDM0zPkU9G1L1ZJ1/eeh+aaDO7tE25WKw/GOL+EvoZ/YnksiiAoSti21v1z8Pce7ly+9r5B1bKfBEVzCooWYL2nf5e6jpkl44BbAz+0IfZ+93ODVQh7rqX+tfiemILtBiiRrqAAOCuALQvJditpH/yDIDvIJoZla/yX4Tpr691sxTYZ+XQCFgz6akb9c1aG/WFORjavJ9s8K0cArwey9ZfVPy5B0ZyCAsJE+7cDp5NNQNE+wIsZPLCh6o/sEdCmJRmIs1mEj5nISlCMAl4IYM+rwNGE3/o+BLgkgH2XZvg8X5Txvb4dOAN4N35bTLcGvgRc575ws7L3frINdJyTsb//gF/ywWqGBphdq37WRktQSFCU+UrAznUd4XZ+7I4lPcrqQZ2X6CDeAZyPf1njqcCvMh7sQguKskDrCGTX3YSppDoW+DaW6jrEdPYWGT7PmwBrcrrv64Gn3Oza+cB/YLtEjnUzgEdj+RXOwHYRXIEVjsrLvg7g/RmPn3NyuI6X3YeBj4DrB3wUWBDYtuM7O5kERfMKigmBp0nbsWRFX6P2fdXbuUHp4Rwe0lZgp0A+HB7oy7o6OOs6LOVwb9d/BwGHuq/IUo4tdJGu7wV+qdzlXmy11KtocV/RF2I5AkLZ860cnum9CR/UWMSWRxXkOTlez4vAD4Hta7BvkhPDL2RgzyNdiZzOBEVLqVSipaWFiCwLIAhGui+LvATFUXUe+zLxUt/eQnb1JRZggV0vVbTVTshsigXRbepa3hHl64CLgUexWJA+2DbOdvfFVQsfdV9gWfCq8+HzFW2Z6y+bAG91bUuy2RrXE5sD/wj4e/2BO8kmzuBh4Gk3OJdbK7ZDZKLrh+X/Dl2Abi6W46Ejh3tyOPALmpefkU8V1TnAARGub4F75ha78WCxE8Hl8aD859vJbslnBnBbV4Kid3+pGYpGm6GAsNnoGqHNr9OPfyjo9bbhtwMkizLiW+Q4NZ5HW4B/IrlaObNJn98ryS+FuM8MxRsFnkn6VXdOUabM5uZS0iyaUzQOx79wWAx+jO2iSYkFWJ2OjgboF2uwbYArcz7vGW4Grpm4C4s3aC+ArU+Rz7JMaG4Fjqz1IAmK5uJIbClC1M9KrALmHQWyeTHwzURtm42VU15b4D7xGhYH80Sk8x9BNjkvUuTvwIcL1l9+iAW1FoUHsWW7dRIUojsWYYGUReIG4i4VdcZqLKX5rQXwXzs2q5KykLwS+AC2/Fk0XsTWmedFtKENS8D2Y+qv6loErsXSdS8tmN0l4DNODBVBsO2JbUOvGQmK5uMCLK97EV6Ep2HR7L9N0L41zrabE/fj8aRZzrmaO93L4pkCPUtPYLka7k/AlnVY6um9nchpJNZiwZcfxjKtFpHlWOr0RxO2cTG2pfvl+qWTgjJrpahBmdWcTrrBQIv59xoI25JOUGY1AwmbRCZk+06VrT5bNafk1C/HELbselbtRmCjRF8MGwNX0xjBlw9iFUlj4hOU+UjVb40gbJG3kMnBasqdojwUEhTVfIls0vj6DtSjO7H1wUQFRZk9CJ9QxieyvLOtzUUQFGA1T44jTMXZ0O0F4lfp7C1HEy71ct6tA0uU1T8BP4YUFGAJqL5M9tlte5ur50zqqDMkQSFB0RnTsLK0sTv2vcCn6XoZ7uOEy66YhaAAGIBF3a+N6MeFwC5d2FcUQVFmGFb/YW0iA+95xMkB4sNEbIlzGcUQEmuxrLTbJ+TD0IKizDj8a8b4tCeB6T6rGxIUEhSd0Qdbo1wR4Ut6NvCeXtp5WEBRMT9Df07GMmDm6csV2Pa07hI1FU1QVL4UfxNYUPa2vQ78muyKZuXFIPf8PJSokFgInEJ2xfNSFBRlZmCxFXmOu+e5PlE3EhQSFD2xEXAM8EDGHXoRlp64npogXwj0Ypmfgz+3wmJVshrE27Esdidg2WJ7oqiCosxU4BtYHoKsxcX9bslgGI3HbliCtlbiC4m/YNuG+ybsr6wFRXkZ5FDgj2SX7O0+bCkxiGhLVVCINJmGbUN7CL9Mbx1OfV+ALWlMDvRi+RG1F3J6w72MvgXskLM/p7gvMN/lpVYszuRI4qVxT4HRwGeBywmzFv0ScBXw9cSm27NkQyz255vYTqCsZyjXYsUAz8VSWY8tiJ/yEBSVDAD2ch+vizx9/jy25DU1tFNSreUh0mcwtta2ExYJPAIrljXCzWqswfaGv1L15wJsO+CKDKdxD8AKPG1S0fpjCahewfZVL8CCOu8hjYQ4mziBMbaLtpGzfQm242VJRbuH/OrWFIX+WE2QcU5kja5o5f89EKuXsryqPeJE5jNyIy3uxfMe1yqf9eH0ru5Jq/NzuT3nZgPnu2ewtYB+8anl8Si2S82H7d19GdNJG+n8vLiL9jgZZaLtbDJCgkIIIURvBfzwijYMyxK6vEJArGnA644tKJKkM0HRT8+IEEKIXrDWtSVyhegMZcoUQgghhASFEEIIISQohBBCCCFBIYQQQgghQSGEEEIICQohhBBCSFAIIYQQQoJCCCGEEEKCQgghhBASFEIIIYSQoBBCCCGEBIUQQgghhASFEEIIISQohBBCCCFBIYQQQggJCiGEEEIICQohhBBCSFAIIYQQQoJCCCGEEBIUQgghhBASFEIIIYQISD+5QAghhOiSNuCNOo9tbSZHtZRKJXUXIYQQQnihJQ8hhBBCSFAIIYQQQoJCCCGEEA3A/wE/Ndw1bK2ssAAAAABJRU5ErkJggg==",alt:"WeTradeUp",height:"48px"})},w=n(12),B=n.n(w),y="https://api.wetradeup.com",L=function(){var e=Object(d.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("".concat(y,"/terms"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(m.a.mark((function e(a){var n,t,s,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.principal,t=a.interest,s=a.months,e.prev=1,e.next=4,B.a.post("".concat(y,"/calculator"),{principal:n,interest:t,months:s});case 4:return c=e.sent,i=c.data.payment,e.abrupt("return",Number.parseFloat(i));case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),Q=function(e){var a=e.tuition,n=e.salary,t=e.take,s=e.cap,c=e.threshold,i=e.months,l=new Array(i).fill(0);if(n<c)return l;for(var r=n/12*t,o=Math.min(r*i,a*s),h=0;h<l.length&&o>0;){var j=Math.min(r,o);l[h]=j,o-=j,h+=1}return l},f=function(){var e=Object(s.useState)({}),a=Object(p.a)(e,2),n=a[0],c=a[1],i=Object(s.useState)(""),l=Object(p.a)(i,2),r=l[0],o=l[1],b=Object(s.useState)(!0),u=Object(p.a)(b,2),x=u[0],A=u[1],O=Object(s.useState)(0),g=Object(p.a)(O,2),w=g[0],B=g[1];Object(s.useEffect)((function(){Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(s.useEffect)((function(){Object(d.a)(m.a.mark((function e(){var a,t,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===r||n[r].loan_monthly_payment){e.next=8;break}return a=n[r].tuition,t=n[r].loan_interest,s=n[r].isa_length,e.next=6,v({principal:a,interest:t,months:s});case 6:i=e.sent,c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(h.a)({},r,Object(j.a)(Object(j.a)({},e[r]),{},{loan_monthly_payment:i})))}));case 8:case"end":return e.stop()}}),e)})))()}),[r]);var y=n[r],f=[0],R=x?w:0;if(y){var M=Number.parseFloat(y.tuition),J=Number.parseFloat(y.isa_take),F=Number.parseFloat(y.isa_cap),Y=Number.parseFloat(y.isa_threshold),G=Number.parseFloat(y.isa_length);f=Q({tuition:M,salary:R,take:J,cap:F,threshold:Y,months:G})}return Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:C.a.controls,children:[Object(t.jsx)(N,{}),Object(t.jsx)("h2",{children:"ISA and Loan Calculator"}),Object(t.jsx)("h3",{className:C.a.label,children:"Select a program"}),Object(t.jsxs)("select",{className:C.a.programSelect,onChange:function(e){var a=e.target.value;o(a),n[a]&&B(Number.parseFloat(n[a].typical_salary))},children:[Object(t.jsx)("option",{value:"",children:"-"}),Object.keys(n).map((function(e){return Object(t.jsx)("option",{value:e,children:e})}))]}),""!==r&&Object(t.jsxs)("div",{children:[Object(t.jsxs)("div",{className:C.a.info,children:[Object(t.jsxs)("div",{className:C.a.infoLine,children:[Object(t.jsx)("p",{className:C.a.infoLabel,children:"Tuition "}),Object(t.jsxs)("p",{className:C.a.infoValue,children:["$",n[r].tuition]})]}),Object(t.jsxs)("div",{className:C.a.infoLine,children:[Object(t.jsx)("p",{className:C.a.infoLabel,children:"Term Length "}),Object(t.jsxs)("p",{className:C.a.infoValue,children:[n[r].isa_length," months"]})]})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("input",{type:"checkbox",checked:x,onClick:function(){A(!x)}}),Object(t.jsx)("label",{children:"Employed?"})]}),x&&Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{className:C.a.label,children:"Projected Salary"}),Object(t.jsxs)("div",{className:C.a.salaryInput,children:[Object(t.jsx)("label",{children:"$"}),Object(t.jsx)("input",{className:C.a.salary,type:"text",value:w,onChange:function(e){B(e.target.value)}})]}),Object(t.jsxs)("p",{className:C.a.salarySubtext,children:["Typical salary: $",n[r].typical_salary]})]})]})]}),""!==r&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(E,{program:y,isaMonthlyPayments:f}),Object(t.jsx)(I,{salary:R,isaMonthlyPayments:f,loanMonthlyPayment:y.loan_monthly_payment})]})]})},R=function(){return Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:o.a.container,children:Object(t.jsx)(f,{})})})};l.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(R,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3a56cbb2.chunk.js.map