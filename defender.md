# Windows Defender


## Disable Defender
;; note that in order to disable/enable Defender
;; the tamper protection setting must be set to OFF
Set-MpPreference -DisasbleRealTimeMonitor $true


## Enable Defender
;; note that in order to disable/enable Defender
;; the tamper protection setting must be set to OFF
Set-MpPreference -DisasbleRealTimeMonitor $false

## Get Defender preferences
Get-MpPreference 
;; watch out for exclusions

## Get Defender Exclusions
Get-MpPreference | Select "exclusion*" | Format-List

## Add a Defender Exclusion rule for a specific Path
Add-MpPreference -ExclusionPath "%USERPROFILE%\AVTESTS"

## Remove a Defender Exclusion rule for a specific Path
Remove-MpPreference -ExclusionPath "%USERPROFILE%\AVTESTS"

## Add a Defender exclusion rule for a specific Extension
Add-MpPreference -ExclusionExtension ".chk"

## Remove a Defender exclusion rule for a specific Extension
Remove-MpPreference -ExclusionExtension ".chk"
