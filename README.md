# Antivirus Evasion

The goal is to obtain remote code execution on  machine through, e.g.,:
- phishing
- physical transfer of file


## General Resources

- [Top 5 ways to breach the external perimeter][1]
- [External engagement through spear-phishing][2]
- [AV/EDR Bypass for Mimikatz][3]
- [Malware Development][4]



## Test a malware

To test virus/backdoor/payload without pushing files to virustotal:
- [NoDistribute](http://nodistribute.com/)
- [SpyralScanner](https://www.spyralscanner.net)
- [AVCheck](https://avcheck.net/)
- [DynCheck](https://dyncheck.com/)
- [AntiSCAN](https://antiscan.me/)
- [AVBoX](https://avbox.info/)
- [KleeScan](https://kleenscan.com/)

These DO NOT CHECK encrypted/payload files on scanners such as: 
- novirusthanks.org
- virustotal.com
- virusscan.jotti.org
- virscan.org
- metascan-online.com
- www.virusimune.com.br

To dynamically run an executable without using our own machine, we can use the
following online service:
- [AppAnyRun](https://app.any.run/)


### Antivirus Test Baseline
We can go on `eicar.com`, to have a baseline of antivirus detection.
```com
X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
```

### Spam Filter Test Baseline

Test string `https://spamassassin.apache.org/gtube/gtube.txt`
```mail
XJS*C4JDBQADN1.NSBN3*2IDNEN*GTUBE-STANDARD-ANTI-UBE-TEST-EMAIL*C.34X
```

### Useful Tools for AV-Detection

Splits a file until it finds out which byte sections are
flagged by Windows Defender.
[DefenderCheck](https://github.com/matterpreter/DefenderCheck)


## Lolbins

A list of lolbins with description:
[Lolbins](https://lolbas-project.github.io/)

## Tools

- unicorn
- the fatrat

## Papers
https://raw.githubusercontent.com/kmkz/Pentesting/master/AV_Evasion/AV_Bypass.ps1

## Other References

https://github.com/gnebbia/Pentesting


[1]: https://medium.com/@adam.toscher/top-five-ways-the-red-team-breached-the-external-perimeter-262f99dc9d17
[2]: https://blog.sublimesecurity.com/red-team-techniques-gaining-access-on-an-external-engagement-through-spear-phishing/
[3]:_https://s3cur3th1ssh1t.github.io/Building-a-custom-Mimikatz-binary/
[4]: https://0xdarkvortex.dev/index.php/category/malware-development/



## Serious References:
https://arty-hlr.com/blog/2021/05/06/how-to-bypass-defender/

And look into: ./malware_dev/

https://0x00sec.org/t/my-antivirus-evasion-journey/25744
