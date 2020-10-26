# Fingerprint an AV


There are different techniques:
- From the DNS cache of their nameservers with tools such as recon-ng,
  give a look here: https://www.hackers-arise.com/post/2016/05/23/how-to-use-reconng-to-determine-the-targets-av-software-1
  or at the saved link in the resources/ folder
- From a sent email, check in the headers to find out
  if there is something related to the AV
- In a Wi-Fi network, capture all the packets
  and check for AV common domains.
  For example:
  ip.host ~ "(?i)(avast|avcdn)\.*"    # for avast
  ip.host ~ "(?i)(comodo)\.*"         # for comodo
  a list of domains related to AV is found 
  with recon-ng data through:
  $HOME/.recon-ng/data/av_domains.lst

- On a wired network, perform ARP poisoning to
  some windows host and check the domains again.


In general it is interesting to understand what DNS names
are resolved on a network to check what AV solution is used.


## Find AV with recon-ng (DNS cache snoop)

recon-ng> marketplace search cache_snoop
recon-ng> marketplace install discovery/info_disclosure/cache_snoop
recon-ng> modules load discovery/info_disclosure/cache_snoop
recon-ng> options list

;; dig for the interested domain: dig example.com
;; get the nameservers (the ones with corresponding to NS records)
;; find their IP (e.g., by pinging)
;; once we have the IP we can set the nameserver in recon-ng
recon-ng> options set NAMESERVER 193.204.35.27
recon-ng> run
