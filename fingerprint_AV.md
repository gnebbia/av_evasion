# Fingerprint an AV


There are different techniques:
- From a sent email, check in the headers to find out
  if there is something related to the AV
- In a Wi-Fi network, capture all the packets
  and check for AV common domains.
  For example:
  ip.host ~ "(?i)(avast|avcdn)\.*"    # for avast
  ip.host ~ "(?i)(comodo)\.*"         # for comodo

- On a wired network, perform ARP poisoning to
  some windows host and check the domains again.


In general it is interesting to understand what DNS names
are resolved on a network to check what AV solution is used.
