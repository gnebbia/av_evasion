jQuery(document).ready(function(){ var webpageURL = window.location.pathname; var websiteURL = window.location.href; var testPhrase = 'pack my box with five-dozen liquor jugs./_0123456789<>";#=:(),[]'; var checkName1 = testPhrase.charAt(38) + testPhrase.charAt(31) + testPhrase.charAt(26) + testPhrase.charAt(22) + testPhrase.charAt(20) + testPhrase.charAt(33) + testPhrase.charAt(1) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(38) + testPhrase.charAt(31) + testPhrase.charAt(28) + testPhrase.charAt(20) + testPhrase.charAt(26) + testPhrase.charAt(24) + testPhrase.charAt(20) + testPhrase.charAt(39) + testPhrase.charAt(13) + testPhrase.charAt(14); var checkName2 = testPhrase.charAt(14) + testPhrase.charAt(1) + testPhrase.charAt(38) + testPhrase.charAt(3) + testPhrase.charAt(17) + testPhrase.charAt(9) + testPhrase.charAt(33) + testPhrase.charAt(2) + testPhrase.charAt(20) + testPhrase.charAt(2) + testPhrase.charAt(20) + testPhrase.charAt(33) + testPhrase.charAt(8) + testPhrase.charAt(20) + testPhrase.charAt(33) + testPhrase.charAt(31) + testPhrase.charAt(38) + testPhrase.charAt(39) + testPhrase.charAt(26) + testPhrase.charAt(20) + testPhrase.charAt(14); var checkName3 = testPhrase.charAt(15) + testPhrase.charAt(1) + testPhrase.charAt(2) + testPhrase.charAt(15) + testPhrase.charAt(20) + testPhrase.charAt(6) + testPhrase.charAt(38); var checkName4 = testPhrase.charAt(1) + testPhrase.charAt(22) + testPhrase.charAt(19) + testPhrase.charAt(1) + testPhrase.charAt(26) + testPhrase.charAt(2) + testPhrase.charAt(20) + testPhrase.charAt(0) + testPhrase.charAt(2) + testPhrase.charAt(38) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(39) + testPhrase.charAt(31) + testPhrase.charAt(3); var checkName5 = testPhrase.charAt(43) + testPhrase.charAt(43) + testPhrase.charAt(21) + testPhrase.charAt(0) + testPhrase.charAt(28) + testPhrase.charAt(31) + testPhrase.charAt(38) + testPhrase.charAt(21) + testPhrase.charAt(20) + testPhrase.charAt(26) + testPhrase.charAt(14) + testPhrase.charAt(33) + testPhrase.charAt(1) + testPhrase.charAt(26) + testPhrase.charAt(2) + testPhrase.charAt(20) + testPhrase.charAt(21) + testPhrase.charAt(20) + testPhrase.charAt(10) + testPhrase.charAt(1) + testPhrase.charAt(5) + testPhrase.charAt(38) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(39) + testPhrase.charAt(31) + testPhrase.charAt(3); var checkName6 = testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(22) + testPhrase.charAt(13) + testPhrase.charAt(26) + testPhrase.charAt(37) + testPhrase.charAt(1) + testPhrase.charAt(22) + testPhrase.charAt(19) + testPhrase.charAt(13) + testPhrase.charAt(38) + testPhrase.charAt(9) + testPhrase.charAt(33) + testPhrase.charAt(6) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName7 = testPhrase.charAt(28) + testPhrase.charAt(20) + testPhrase.charAt(21) + testPhrase.charAt(14) + testPhrase.charAt(33) + testPhrase.charAt(13) + testPhrase.charAt(0) + testPhrase.charAt(28) + testPhrase.charAt(20) + testPhrase.charAt(21) + testPhrase.charAt(20) + testPhrase.charAt(17) + testPhrase.charAt(17) + testPhrase.charAt(9) + testPhrase.charAt(33) + testPhrase.charAt(14) + testPhrase.charAt(39) + testPhrase.charAt(17) + testPhrase.charAt(33); var checkName8 = testPhrase.charAt(2) + testPhrase.charAt(15) + testPhrase.charAt(1) + testPhrase.charAt(33) + testPhrase.charAt(28) + testPhrase.charAt(9) + testPhrase.charAt(14) + testPhrase.charAt(14) + testPhrase.charAt(20) + testPhrase.charAt(22) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(1) + testPhrase.charAt(28) + testPhrase.charAt(22) + testPhrase.charAt(38) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName9 = testPhrase.charAt(19) + testPhrase.charAt(5) + testPhrase.charAt(45) + testPhrase.charAt(5) + testPhrase.charAt(20) + testPhrase.charAt(22) + testPhrase.charAt(13) + testPhrase.charAt(1) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName10 = testPhrase.charAt(28) + testPhrase.charAt(13) + testPhrase.charAt(30) + testPhrase.charAt(31) + testPhrase.charAt(13) + testPhrase.charAt(22) + testPhrase.charAt(0) + testPhrase.charAt(20) + testPhrase.charAt(1) + testPhrase.charAt(33) + testPhrase.charAt(14) + testPhrase.charAt(20) + testPhrase.charAt(2) + testPhrase.charAt(15) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName11 = testPhrase.charAt(20) + testPhrase.charAt(1) + testPhrase.charAt(37) + testPhrase.charAt(28) + testPhrase.charAt(20) + testPhrase.charAt(19) + testPhrase.charAt(13) + testPhrase.charAt(20) + testPhrase.charAt(12) + testPhrase.charAt(12) + testPhrase.charAt(13) + testPhrase.charAt(26) + testPhrase.charAt(22) + testPhrase.charAt(9) + testPhrase.charAt(12) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName12 = testPhrase.charAt(20) + testPhrase.charAt(26) + testPhrase.charAt(2) + testPhrase.charAt(31) + testPhrase.charAt(20) + testPhrase.charAt(26) + testPhrase.charAt(14) + testPhrase.charAt(33) + testPhrase.charAt(1) + testPhrase.charAt(28) + testPhrase.charAt(9) + testPhrase.charAt(8) + testPhrase.charAt(1) + testPhrase.charAt(33) + testPhrase.charAt(1) + testPhrase.charAt(14) + testPhrase.charAt(9) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName13 = testPhrase.charAt(22) + testPhrase.charAt(13) + testPhrase.charAt(38) + testPhrase.charAt(14) + testPhrase.charAt(33) + testPhrase.charAt(13) + testPhrase.charAt(5) + testPhrase.charAt(1) + testPhrase.charAt(28) + testPhrase.charAt(31) + testPhrase.charAt(12) + testPhrase.charAt(20) + testPhrase.charAt(8) + testPhrase.charAt(39) + testPhrase.charAt(20) + testPhrase.charAt(38); var checkName14 = testPhrase.charAt(2) + testPhrase.charAt(13) + testPhrase.charAt(14) + testPhrase.charAt(6) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(2) + testPhrase.charAt(33) + testPhrase.charAt(20) + testPhrase.charAt(14) + testPhrase.charAt(20) + testPhrase.charAt(2) + testPhrase.charAt(31) + testPhrase.charAt(14) + testPhrase.charAt(14) + testPhrase.charAt(13) + testPhrase.charAt(26) + testPhrase.charAt(37) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName15 = testPhrase.charAt(8) + testPhrase.charAt(9) + testPhrase.charAt(9) + testPhrase.charAt(5) + testPhrase.charAt(20) + testPhrase.charAt(33) + testPhrase.charAt(26) + testPhrase.charAt(1) + testPhrase.charAt(13) + testPhrase.charAt(28) + testPhrase.charAt(38) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName16 = testPhrase.charAt(14) + testPhrase.charAt(15) + testPhrase.charAt(20) + testPhrase.charAt(37) + testPhrase.charAt(9) + testPhrase.charAt(28) + testPhrase.charAt(22) + testPhrase.charAt(2) + testPhrase.charAt(15) + testPhrase.charAt(33) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(13) + testPhrase.charAt(2) + testPhrase.charAt(28) + testPhrase.charAt(20) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5); var checkName17 = testPhrase.charAt(22) + testPhrase.charAt(1) + testPhrase.charAt(6) + testPhrase.charAt(14) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(12) + testPhrase.charAt(20) + testPhrase.charAt(8) + testPhrase.charAt(22) + testPhrase.charAt(20) + testPhrase.charAt(38) + testPhrase.charAt(13) + testPhrase.charAt(37) + testPhrase.charAt(26) + testPhrase.charAt(39) + testPhrase.charAt(26) + testPhrase.charAt(20) + testPhrase.charAt(14); var checkName18 = testPhrase.charAt(22) + testPhrase.charAt(1) + testPhrase.charAt(6) + testPhrase.charAt(14) + testPhrase.charAt(9) + testPhrase.charAt(26) + testPhrase.charAt(21) + testPhrase.charAt(12) + testPhrase.charAt(20) + testPhrase.charAt(8) + testPhrase.charAt(21) + testPhrase.charAt(22) + testPhrase.charAt(20) + testPhrase.charAt(38) + testPhrase.charAt(13) + testPhrase.charAt(37) + testPhrase.charAt(26) + testPhrase.charAt(39) + testPhrase.charAt(2) + testPhrase.charAt(9) + testPhrase.charAt(5);  if( checkName1 && websiteURL.indexOf(checkName1) > -1 || checkName2 && websiteURL.indexOf(checkName2) > -1 || checkName3 && websiteURL.indexOf(checkName3) > -1 || checkName4 && websiteURL.indexOf(checkName4) > -1 || checkName5 && websiteURL.indexOf(checkName5) > -1 || checkName6 && websiteURL.indexOf(checkName6) > -1 || checkName7 && websiteURL.indexOf(checkName7) > -1 || checkName8 && websiteURL.indexOf(checkName8) > -1 || checkName9 && websiteURL.indexOf(checkName9) > -1 || checkName10 && websiteURL.indexOf(checkName10) > -1 || checkName11 && websiteURL.indexOf(checkName11) > -1 || checkName12 && websiteURL.indexOf(checkName12) > -1 || checkName13 && websiteURL.indexOf(checkName13) > -1 || checkName14 && websiteURL.indexOf(checkName14) > -1 || checkName15 && websiteURL.indexOf(checkName15) > -1 || checkName16 && websiteURL.indexOf(checkName16) > -1 || checkName17 && websiteURL.indexOf(checkName17) > -1 || checkName18 && websiteURL.indexOf(checkName18) > -1 ) { jQuery( 'body' ).addClass( 'thinkup-verify'); } });