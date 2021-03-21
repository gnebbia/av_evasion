## Intro

C++ and other compiled languages have advantages over other languages such as C# or PowerShell script.
Because it's much more difficult to analyze compiled binary when compared to managed code or script.

For the purpose of this and following articles we will use MS Visual Studio 2017 or 2019 on Windows 10.

## How detections work

Antimalware solutions can use three types of detection mechanisms:

-  signature-based detection - static inspection of file checksums (MD5,
   SHA1 etc.) and presence of known strings or byte sequences in the binary,
-  heuristic detection - (usually) static analysis of application behavior
   and identification of potentially malicious characteristics (e.g. use
   of specific functions which are usually associated with malware),
-  sandboxing - dynamic analysis of the program which gets executed in
   a controlled environment (sandbox) where its actions are monitored.

Multiple techniques exist that evade different detection mechanisms. For example:

- polymorphic (or at least often recompiled) malware can defeat signature-based detection,
- obfuscation of code flow can evade heuristics based detection,
- conditional statements based on environmental checks can detect and bypass sandboxes,
- encoding or encryption of sensitive information can help bypass signature-based detection as well as heuristic detection.

