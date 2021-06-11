/*


转载注明出处
作者: @𝐃𝐃
=========================================


下载链接🔗http://mbxiqk.com/api/h5/binding?psid=MzkzMTQ4Nw==
=========================================

说明:
走路赚APP 走路步数可以获得金币 兑换现金

圈x获取不到ck就把body改成header


⚠️6个ck  转盘抽奖 转盘翻倍 签到翻倍
          兑换步数 刮刮卡 喝水任务

定时建议10分钟左右自己设置


=========================================


一共6个cookie 一共8个Secrets 多账号换行


  <>            <>  XIAOMUYUHEADER
  <>            <>  IBOXPAYBODY
  <>            <>  TURNTABLRURL
  <>            <>  TURNTABLRHEADER
  <>            <>  DOUBLEHEADER
  <>            <>  CARDBODY
  <>            <>  MEMBERBODY
  <>            <>  DRINKBODY


=========================================
surge:本地
签到获取ck
走路赚APP = type=http-request,pattern=^https?:\/\/api\.xiaomuyu888\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/DD-D1/Script/main/zoulusign.js




=========================================
圈x:本地
签到获取ck
^https?:\/\/api\.xiaomuyu888\.com\/* url script-request-body https://raw.githubusercontent.com/DD-D1/Script/main/zoulusign.js

 



=========================================
loon:本地
签到获取ck
http-request ^https?:\/\/api\.xiaomuyu888\.com\/* script-path=https://raw.githubusercontent.com/DD-D1/Script/main/zoulusign.js, requires-body=true, timeout=10, tag=走路赚APP





=========================================
小火箭:本地
签到获取ck
走路赚APP = type=http-request,script-path=https://raw.githubusercontent.com/DD-D1/Script/main/zoulusign.js,pattern=^https?:\/\/api\.xiaomuyu888\.com\/*,max-size=131072,requires-body=true,timeout=10,enable=true





MITM= api.xiaomuyu888.com

=========================================



*/

const DD = '走路赚APP';
const $ = new Env(DD);
$.idx = ($.idx = ($.getval('zouluSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const logs = 0; //设置0关闭日志,1开启日志
const log = 0; //0关闭系统日志,1开启系统日志,和系统通知不要一起打开,关闭系统通知就要打开,系统日志
let noNolog = ''; //1为所有通知 2为11小时通知一次 3为3小时通知一次 4为5小时通知一下
let dd = "" //
let step = '';
let nique = '';
let cupid = '';
let times = new Date(new Date()
        .getTime() + 0 * 60 * 60 * 1000)
    .toLocaleString('zh'
        , {
            hour12: false
        });
let Time = new Date(
    new Date()
    .getTime() +
    new Date()
    .getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000);
const xiaomuyuheaderArr = [];
const xiaomuyubodyArr = [];
const turntableheaderArr = [];
const turntableurlArr = [];
const doubleheaderArr = [];
const CardbodyArr = [];
const drinkbodyArr = [];
const memberbodyArr = [];
let xiaomuyuheader = $.getdata('xiaomuyuheader');
let xiaomuyubody = $.getdata('xiaomuyubody');
let turntableurl = $.getdata('turntableurl');
let turntableheader = $.getdata('turntableheader');
let doubleheader = $.getdata('doubleheader');
let Cardbody = $.getdata('Cardbody');
let drinkbody = $.getdata('drinkbody');
let memberbody = $.getdata('memberbody');
if ($.isNode())
{
    if (process.env.XIAOMUYUHEADER && process.env.XIAOMUYUHEADER.indexOf('#') > -1)
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split('#');
        console.log(`您选择的是用"#"隔开\n`)
    }
    else if (process.env.XIAOMUYUHEADER && process.env.XIAOMUYUHEADER.indexOf('\n') > -1)
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split('\n');
        console.log(`您选择的是用换行隔开\n`)
    }
    else
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split()
    };
    if (process.env.XIAOMUYUBODY && process.env.XIAOMUYUBODY.indexOf('#') > -1)
    {
        xiaomuyubody = process.env.XIAOMUYUBODY.split('#');
    }
    else if (process.env.XIAOMUYUBODY && process.env.XIAOMUYUBODY.split('\n')
        .length > 0)
    {
        xiaomuyubody = process.env.XIAOMUYUBODY.split('\n');
    }
    else
    {
        xiaomuyubody = process.env.IBOXPAYBODY.split()
    };
    if (process.env.TURNTABLRURL && process.env.TURNTABLRURL.indexOf('#') > -1)
    {
        turntableurl = process.env.TURNTABLRURL.split('#');
    }
    else if (process.env.TURNTABLRURL && process.env.TURNTABLRURL.split('\n')
        .length > 0)
    {
        turntableurl = process.env.TURNTABLRURL.split('\n');
    }
    else
    {
        turntableurl = process.env.TURNTABLRURL.split()
    };
    if (process.env.TURNTABLRHEADER && process.env.TURNTABLRHEADER.indexOf('#') > -1)
    {
        turntableheader = process.env.TURNTABLRHEADER.split('#');
    }
    else if (process.env.TURNTABLRHEADER && process.env.TURNTABLRHEADER.indexOf('\n') > -1)
    {
        turntableheader = process.env.TURNTABLRHEADER.split('\n');
    }
    else
    {
        turntableheader = process.env.TURNTABLRHEADER.split()
    };
    if (process.env.DOUBLEHEADER && process.env.DOUBLEHEADER.indexOf('#') > -1)
    {
        doubleheader = process.env.DOUBLEHEADER.split('#');
    }
    else if (process.env.DOUBLEHEADER && process.env.DOUBLEHEADER.split('\n')
        .length > 0)
    {
        doubleheader = process.env.DOUBLEHEADER.split('\n');
    }
    else
    {
        doubleheader = process.env.DOUBLEHEADER.split()
    };
    if (process.env.CARDBODY && process.env.TURNTABLRURL.indexOf('#') > -1)
    {
        Cardbody = process.env.CARDBODY.split('#');
    }
    else if (process.env.CARDBODY && process.env.CARDBODY.split('\n')
        .length > 0)
    {
        Cardbody = process.env.CARDBODY.split('\n');
    }
    else
    {
        Cardbody = process.env.CARDBODY.split()
    };
    if (process.env.MEMBERBODY && process.env.MEMBERBODY.indexOf('#') > -1)
    {
        memberbody = process.env.MEMBERBODY.split('#');
    }
    else if (process.env.MEMBERBODY && process.env.MEMBERBODY.indexOf('\n') > -1)
    {
        memberbody = process.env.MEMBERBODY.split('\n');
    }
    else
    {
        memberbody = process.env.MEMBERBODY.split()
    };
    if (process.env.DRINKBODY && process.env.DRINKBODY.indexOf('#') > -1)
    {
        drinkbody = process.env.DRINKBODY.split('#');
    }
    else if (process.env.DRINKBODY && process.env.DRINKBODY.split('\n')
        .length > 0)
    {
        drinkbody = process.env.DRINKBODY.split('\n');
    }
    else
    {
        drinkbody = process.env.DRINKBODY.split()
    };

    Object.keys(xiaomuyuheader)
        .forEach((item) =>
        {
            if (xiaomuyuheader[item])
            {
                xiaomuyuheaderArr.push(xiaomuyuheader[item])
            }
        });
    Object.keys(xiaomuyubody)
        .forEach((item) =>
        {
            if (xiaomuyubody[item])
            {
                xiaomuyubodyArr.push(xiaomuyubody[item])
            }
        });
    Object.keys(turntableurl)
        .forEach((item) =>
        {
            if (turntableurl[item])
            {
                turntableurlArr.push(turntableurl[item])
            }
        });
    Object.keys(turntableheader)
        .forEach((item) =>
        {
            if (turntableheader[item])
            {
                turntableheaderArr.push(turntableheader[item])
            }
        });
    Object.keys(doubleheader)
        .forEach((item) =>
        {
            if (doubleheader[item])
            {
                doubleheaderArr.push(doubleheader[item])
            }
        });
    Object.keys(Cardbody)
        .forEach((item) =>
        {
            if (Cardbody[item])
            {
                CardbodyArr.push(Cardbody[item])
            }
        });
    Object.keys(drinkbody)
        .forEach((item) =>
        {
            if (drinkbody[item])
            {
                drinkbodyArr.push(drinkbody[item])
            }
        });
    Object.keys(memberbody)
        .forEach((item) =>
        {
            if (memberbody[item])
            {
                memberbodyArr.push(memberbody[item])
            }
        });

    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`);
}
else
{
    xiaomuyuheaderArr.push($.getdata("xiaomuyuheader"));
    xiaomuyubodyArr.push($.getdata("xiaomuyubody"));
    turntableurlArr.push($.getdata("turntableurl"));
    turntableheaderArr.push($.getdata("turntableheader"));
    doubleheaderArr.push($.getdata("doubleheader"));
    CardbodyArr.push($.getdata("Cardbody"));
    drinkbodyArr.push($.getdata("drinkbody"));
    memberbodyArr.push($.getdata("memberbody"));
    if ("ZLSTEP")
    {
        step = $.getval("ZLSTEP") || '1';
    }
    if ("NOLOG")
    {
        noNolog = $.getval("NOLOG") || '1';
    }
    if ("NIQUE")
    {
        nique = $.getval("NIQUE") || '0';
    }
    if ("CUPID")
    {
        cupid = $.getval("CUPID") || '1';
    }
    // boxjs中设置多账号数
    let zouluCount = ($.getval('zouluCount') || '1') - 0;
    for (let i = 2; i <= zouluCount; i++)
    {
        if ($.getdata(`xiaomuyuheader${i}`))
        {
            xiaomuyuheaderArr.push($.getdata(`xiaomuyuheader${i}`));
            xiaomuyubodyArr.push($.getdata(`xiaomuyubody${i}`));
            turntableurlArr.push($.getdata(`turntableurl${i}`));
            turntableheaderArr.push($.getdata(`turntableheader${i}`));
            doubleheaderArr.push($.getdata(`doubleheader${i}`));
            CardbodyArr.push($.getdata(`Cardbody${i}`));
            drinkbodyArr.push($.getdata(`drinkbody${i}`));
            memberbodyArr.push($.getdata(`memberbody${i}`));
        }
    }
}!(async () =>
{
    if (typeof $request != "undefined")
    {
        await zoulusign()
    }
    else
    {
        if (!xiaomuyuheaderArr[0])
        {
            $.msg($.name, '运行前需要获取cookie点击前往\n', 'http://mbxiqk.com/api/h5/binding?psid=MzkzMTQ4Nw=='
                , {
                    "open-url": "http://mbxiqk.com/api/h5/binding?psid=MzkzMTQ4Nw=="
                });
            return;
        }
        else
        {
            console.log(`\n************ 脚本共${xiaomuyuheaderArr.length}个${$.name}账号  ************\n`);
            console.log(`\n============ 脚本执行时间(TM)：${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})}  =============\n`)
        }
        for (let h = 0; h < 6; h++)
        {
        console.log(`\n************ 执行第${h+1}轮  ************\n`);
        for (let i = 0; i < xiaomuyuheaderArr.length; i++)
        {
            if (xiaomuyuheaderArr[i])
            {
                $.index = i + 1;
                xiaomuyuheader = xiaomuyuheaderArr[i];
                xiaomuyubody = xiaomuyubodyArr[i];
                turntableurl = turntableurlArr[i];
                turntableheader = turntableheaderArr[i];
                doubleheader = doubleheaderArr[i];
   Cardbody = CardbodyArr[i];
                drinkbody = drinkbodyArr[i];
     memberbody = memberbodyArr[i];
                zh = (`【账号${$.index}】`);
                console.log(`\n开始执行【${$.name}${$.index}】\n`)
            }
            await Name();
            await $.wait(1000);
            console.log(`开始执行签到任务时间:${times}`)
            await signCoin();
            await $.wait(1000);
            console.log(`开始执行签到翻倍任务时间:${times}`)
            await gold();
            await $.wait(1200);
            console.log(`开始执行幸运转盘任务时间:${times}`)
            await zhuanpan();
            //if (step == 1 && (Time.getHours() >= 22 && Time.getHours() <= 23) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            if (Time.getHours() == 22 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                step = 1;
                nique = 22668;
                await $.wait(1200);
                console.log(`开始执行步数兑换任务时间:${times}`)
                await member();
            }
            if (Time.getHours() == 10 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 1; 
                await $.wait(1000);
                console.log(`开始执行10点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 11 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 2; 
                await $.wait(1000);
                console.log(`开始执行11点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 12 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 3; 
                await $.wait(1000);
                console.log(`开始执行12点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 13 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 4; 
                await $.wait(1000);
                console.log(`开始执行13点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 14 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 5; 
                await $.wait(1000);
                console.log(`开始执行14点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 15 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 6; 
                await $.wait(1000);
                console.log(`开始执行15点喝水任务任务时间:${times}`)
                await drink();
            }
            if (Time.getHours() == 16 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 7; 
                await $.wait(1000);
                console.log(`开始执行16点喝水任务任务时间:${times}`)
                await drink();
            }
            //if (cupid == 8 && (Time.getHours() >= 10 && Time.getHours() <= 20) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            if (Time.getHours() == 17 && (Time.getMinutes() >= 0 && Time.getMinutes() <= 20))
            {
                cupid = 8; 
                await $.wait(1000);
                console.log(`开始执行17点喝水任务任务时间:${times}`)
                await drink();
            }
            await $.wait(1200);
            console.log(`开始执行首页随机奖励任务时间:${times}`)
            await randCoin();
            await $.wait(1200);
            console.log(`开始执行刮刮卡任务时间:${times}`)
            await Card();
            await $.wait(1200);
            console.log(`开始执行开宝箱任务时间:${times}`)
            await videoCoin();
            await $.wait(1200);
            console.log(`开始执行查询账号信息时间:${times}`)
            await jinbi();
            await Msg();
        }
        console.log(`\n************ 第${h+1}轮执行结束  ************\n`);
        await $.wait(600000);
        }
    }
})()
.catch((e) => $.logErr(e))
    .finally(() => $.done())

function Name(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: `https://api.xiaomuyu888.com/api/member/index`
                , headers: JSON.parse(xiaomuyuheader)
                , body: xiaomuyubody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.Name = data;
                    if ($.Name.code == 200)
                        console.log("...开始执行【" + $.Name.data.user.nickname + "】账号任务...\n");
                    names = $.Name.data.user.nickname;
                    ZLNAME = `••••••${zh}${names}••••••`;
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function signCoin(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/member/signCoin'
                , headers: JSON.parse(xiaomuyuheader)
                , body: xiaomuyubody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.signCoin = data;
                    if ($.signCoin.code == 200)
                    {
                        dd += "【每日签到】今日签到+" + $.signCoin.data.setting[$.signCoin.data.days - 1] + "金币" + ",已签到" + $.signCoin.data.days + "天\n";
                        $.log(`本次执行任务情况:今日签到获得${$.signCoin.data.setting[$.signCoin.data.days-1]}金币\n`);
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function gold(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/member/signCoinDouble'
                , headers: JSON.parse(xiaomuyuheader)
                , body: xiaomuyubody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.gold = data;
                    if ($.gold.code == 200)
                    {
                        dd += "【签到翻倍】+" + $.gold.data + "金币\n";
                        $.log(`本次执行任务情况:获得${$.gold.data}金币\n`);
                    }
                    else
                    {
                        if ($.gold.code == 2002)
                            dd += "【签到翻倍】" + $.gold.message + "\n";
                        $.log(`本次执行任务情况:${$.gold.message}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function jinbi(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: `https://api.xiaomuyu888.com/api/member/index`
                , headers: JSON.parse(xiaomuyuheader)
                , body: xiaomuyubody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.jinbi = data;
                    if ($.jinbi.code == 200)
                        dd += "【账号金币】" + "约" + $.jinbi.data.canCash + "元" + ",今日" + $.jinbi.data.today_coin + "金币\n";
                    $.log(`本次执行任务情况,约${$.jinbi.data.canCash}元,账号累计${$.jinbi.data.user.amount_step}金币,今日兑换${$.jinbi.data.today_ex_step}步数\n`);
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function zhuanpan(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: turntableurl
                , headers: JSON.parse(turntableheader)
            , }
            $.get(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.zhuanpan = data;
                    if ($.zhuanpan.data.coin > 0)
                    {
                        unique = $.zhuanpan.data.unique;
                        dd += "【幸运转盘】+" + $.zhuanpan.data.coin + "金币\n";
                        $.log(`本次执行任务情况:转盘次数${$.zhuanpan.data.leftNum}\n`);
                    }
                    else
                    {
                        if ($.zhuanpan.data.coin <= 0)
                            unique = $.zhuanpan.data.unique;
                        dd += "【幸运转盘】" + "未获得转盘奖励\n";
                        $.log(`本次执行任务情况:未获得转盘奖励\n`)
                    }
                    if ($.zhuanpan.data.leftNum > 0)
                    {
                        unique = $.zhuanpan.data.unique;
                        await $.wait(1200);
                        console.log(`开始执行转盘翻倍任务时间:${times}`)
                        await zhuangold();
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function zhuangold(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: "http://api.xiaomuyu888.com/api/turntable/double?imei=b857b4bfdbddaa304ddd0b6ba1b538f64606d69c"
                , headers: JSON.parse(turntableheader)
                , body: `source=ios&device=ios&unique=${unique}`
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    //data = JSON.parse(data);
                    if (logs == 0) console.log(data + "\n")
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function Card(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/Card/cardDetails'
                , headers: JSON.parse(xiaomuyuheader)
                , body: Cardbody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.gold = data;
                    if ($.gold.code == 200)
                    {
                        dd += "【刮刮卡活动】+" + $.gold.data.coin_numbers + "金币\n";
                        $.log(`本次执行任务情况:获得${$.gold.data.coin_numbers}金币\n`);
                    }
                    else
                    {
                        if ($.gold.code == 2002)
                            dd += "【刮刮卡活动】" + $.gold.message + "\n";
                        $.log(`本次执行任务情况:${$.gold.message}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function videoCoin(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/member/videoCoin'
                , headers: JSON.parse(xiaomuyuheader)
                , body: xiaomuyubody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.videoCoin = data;
                    if ($.videoCoin.code == 200)
                    {
                        dd += "【开宝箱任务】+" + $.videoCoin.data + "金币\n";
                        $.log(`本次执行任务情况:获得${$.videoCoin.data}金币\n`);
                    }
                    else
                    {
                        if ($.videoCoin.code == 2002)
                            dd += "【开宝箱任务】" + $.videoCoin.message + "\n";
                        $.log(`本次执行任务情况:${$.videoCoin.message}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function randCoin(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            Coins = Math.floor(Math.random() * 10);
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/member/randCoin'
                , headers: JSON.parse(xiaomuyuheader)
                , body: drinkbody.replace(/coin=\d+/, `coin=${Coins}`)
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.videoCoin = data;
                    if ($.videoCoin.code == 200)
                    {
                        dd += "【随机奖励】+" + Coins + "金币\n";
                        $.log(`本次执行任务情况:获得${Coins}金币\n`);
                    }
                    else
                    {
                        if ($.videoCoin.code == 2004)
                            dd += "【随机奖励】" + $.videoCoin.message + "\n";
                        $.log(`本次执行任务情况:${$.videoCoin.message}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function member(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/member/exchangedCoin'
                , headers: JSON.parse(xiaomuyuheader)
                , body: memberbody.replace(/step=\d+/, `step=${nique}`)
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.videoCoin = data;
                    if ($.videoCoin.message == "Request Success")
                    {
                        dd += "【步数兑换】+" + $.videoCoin.data.coin_number + "金币\n";
                        $.log(`本次执行任务情况:获得${$.videoCoin.data.coin_number}金币\n`);
                    }
                    else
                    {
                        if ($.videoCoin.code == 3002)
                            dd += "【步数兑换】" + $.videoCoin.message + "\n";
                        $.log(`本次执行任务情况:${$.videoCoin.message}\n`)
                    }
                    if ($.videoCoin.code == 3003)
                    {
                        dd += "【步数兑换】" + $.videoCoin.message + "\n";
                        $.log(`本次执行任务情况:${$.videoCoin.message}\n`);
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function drink(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            Coins = 5;
            let Url = {
                url: 'https://api.xiaomuyu888.com/api/home/drink'
                , headers: JSON.parse(xiaomuyuheader)
                , body: drinkbody.replace(/coin=\d*/, `coin=${Coins}`)
                    .replace(/cupid=\d*/, `cupid=${cupid}`)
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.videoCoin = data;
                    if ($.videoCoin.code == 200)
                    {
                        dd += "【喝水任务】+" + `${Coins*2}金币\n`;
                        $.log(`本次执行任务情况:获得${Coins*2}金币\n`);
                    }
                    else
                    {
                        if ($.videoCoin.code == 1001)
                            dd += "【喝水任务】" + $.videoCoin.message + "\n";
                        $.log(`本次执行任务情况:${$.videoCoin.message}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}

function Msg()
{
    if (log == 1) console.log(`\n==============📣系统通知📣==============\n${$.name}${dd}`);
    if (noNolog == 1)
    {
        $.msg($.name, "", `${ZLNAME}\n${dd}`);
    }
    if (noNolog == 2 && (Time.getHours() == 11 || Time.getHours() == 23) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", `${ZLNAME}\n${dd}`);
    }
    if (noNolog == 3 && (Time.getHours() == 0 || Time.getHours() == 3 || Time.getHours() == 6 || Time.getHours() == 9 || Time.getHours() == 12 || Time.getHours() == 15 || Time.getHours() == 18 || Time.getHours() == 21) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", `${ZLNAME}\n${dd}`);
    }
    if (noNolog == 4 && (Time.getHours() == 0 || Time.getHours() == 5 || Time.getHours() == 10 || Time.getHours() == 15 || Time.getHours() == 20) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", `${ZLNAME}\n${dd}`);
    }
}

function zoulusign()
{
    if ($request.url.indexOf("api/turntable/turntableCoin?") > 0)
    {
        const turntableurl = $request.url;
        if (turntableurl)
            $.setdata(turntableurl, "turntableurl" + $.idx);
        const turntableheader = JSON.stringify($request.headers);
        if (turntableheader)
            $.setdata(turntableheader, "turntableheader" + $.idx);
        $.msg($.name + $.idx, "", "[获取转盘数据]✅成功");
    }
    if ($request.url.indexOf("member/signCoinDouble") > 0)
    {
        const xiaomuyuheader = JSON.stringify($request.headers);
        if (xiaomuyuheader)
            $.setdata(xiaomuyuheader, "xiaomuyuheader" + $.idx);
        const xiaomuyubody = $request.body;
        if (xiaomuyubody)
            $.setdata(xiaomuyubody, "xiaomuyubody" + $.idx);
        $.msg($.name + $.idx, "", "[获取签到翻倍数据]✅成功");
    }
    if ($request.url.indexOf("api/turntable/double?") > 0)
    {
        const doubleheader = JSON.stringify($request.headers);
        if (doubleheader)
            $.setdata(doubleheader, "doubleheader" + $.idx);
        $.msg($.name + $.idx, "", "[获取转盘翻倍数据]✅成功");
    }
    if ($request.url.indexOf("Card/cardDetails") > 0)
    {
        const Cardbody = $request.body;
        if (Cardbody)
            $.setdata(Cardbody, "Cardbody" + $.idx);
        $.msg($.name + $.idx, "", "[获取刮刮卡数据]✅成功");
    }
    if ($request.url.indexOf("api/home/drink") > 0)
    {
        const drinkbody = $request.body;
        if (drinkbody)
            $.setdata(drinkbody, "drinkbody" + $.idx);
        $.msg($.name + $.idx, "", "[获取喝水数据]✅成功");
    }
    if ($request.url.indexOf("member/exchangedCoin") > 0)
    {
        const memberbody = $request.body;
        if (memberbody)
            $.setdata(memberbody, "memberbody" + $.idx);
        $.msg($.name + $.idx, "", "[获取兑换步数数据]✅成功");
    }
}


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}



