---
title: OSCP Checklist
description: Checklist for OSCP Exam
---

This is my (not cleaned up) checklist I used for my OSCP exam, taken January 2024.

## External Enumeration and Foothold
- [ ] Port Scan
	- [ ] TCP
	- [ ] UDP (primarily for SNMP)
	- [ ] run an extra scan (or two) as scans can be inaccurate
- [ ] Check for anonymous logins
	- [ ] FTP
	- [ ] SMB
- [ ] Quick check on web server if exists
	- [ ] Check for any uploads
	- [ ] Check for easy logins (anonymous, default, weak creds)
	- [ ] Check for sql / command injection
	- [ ] feroxbuster enumeration if needed
		- [ ] enumerate with bigger wordlists
		- [ ] enumerate for filetypes like php, aspx
- [ ] Check SNMP
- [ ] Search for exploits
	- [ ] e.g. `<service> exploit`, `<service> <version> exploit`, `<service> exploit github`
	- [ ] also try on searchsploit
	- [ ] just try running the exploits.. sometimes they work straight up
- [ ] enum4linux

## Post Exploitation

### Windows
- [ ] Manual
	- [ ] Check command line history
	- [ ] Check services/tasks/installed apps, icacls to check perms
	- [ ] check for files in user path like txt pdf cfg xml etc
	- [ ] `whoami` `whoami /priv`, check groups also for special privileges
	- [ ] rubeus, asreproast, kerberoast, dcsync
	- [ ] netexec / crackmapexec
	- [ ] rdp, wmiexec, evilwinrm, psexec
	- [ ] netstat
	- [ ] sam/system backups
	- [ ] env vars
	- [ ] `systeminfo`
- [ ] Automated
	- [ ] winpeas
	- [ ] powershellscripts
		- [ ] powerup.ps1, `Invoke-AllChecks`
- [ ] https://mayfly277.github.io/assets/blog/pentest_ad_dark.svg
- [ ] https://book.hacktricks.xyz/windows-hardening/checklist-windows-privilege-escalation
- [ ] lolbas

chain commands for proof
`whoami && ipconfig && type C:\Users\Administrator\Desktop\proof.txt`

### Linux

- [ ] Manual
	- [ ] check `id`, any special groups
	- [ ] check bash history
	- [ ] check ssh files
	- [ ] check `/opt`
	- [ ] check `/tmp` for any weird files
	- [ ] check `/var/www` or similar for hosted webapps
	- [ ] `netstat` to see if any other applications are running
	- [ ] `sudo -l` , even if no password
	- [ ] `crontab -l`
	- [ ] `find / -perm -u=s -type f 2>/dev/null`
	- [ ] env vars
	- [ ] pspy
	- [ ] `uname -a`, check kernel exploits, check for make/gcc
- [ ] Automated
	- [ ] linpeass
	- [ ] linenum
- [ ] https://book.hacktricks.xyz/linux-hardening/linux-privilege-escalation-checklist
- [ ] gtfobins

chain commands for proof
`id && ifconfig && cat /root/proof.txt`



enumerate again with new credentials (e.g. winpeas/linpeas with admin vs initial)
exploits
- be sure to read the code and understand what it is doing
- if dont work
	- maybe break it down into smaller steps
	- run it again
	- change things we need to change

https://github.com/swisskyrepo/PayloadsAllTheThings
https://www.hackthebox.com/blog/active-directory-penetration-testing-cheatsheet-and-guide
