#! /usr/bin/perl

use warnings;
use strict;
use CGI qw(:standard);
use CGI::Carp qw(warningsToBrowser fatalsToBrowser);
my $q = CGI->new;
my %data;

$data{select} = $q->param('select');
$data{email} = $q->param('email');
$data{affiliation} = $q->param('affiliation');
$data{name} = $q->param('name');
$data{content} = $q->param('content');
$data{phone} = $q->param('phone');
$data{emailEscape} = $q->param('emailEscape');

eval {
    open my $sendmail, "| /usr/sbin/sendmail -oi -t" or die $!;
    print $sendmail <<EOF;
From: jrista\@jrista-isr.com(JRISTA事務局)
To: $data{emailEscape}
Subject: Contact From JRISTA事務局\n
この度は、JRISTA 事務局にお問い合わせいただき、誠に有難うございます。\n\n\n
お問い合わせいただきました内容に関しましては、\n
追って、担当者より回答させていただきます。\n\n\n
注:GW や年末年始の対応は、WEB でのご案内をご参照願います。\n
    :本メールは送信専用のため、返信できません。ご了承くださいませ。\n\n\n
JRISTA 事務局\n\n\n
以下、いただいたお問い合わせ内容です。\n
------------------------------------------------------------------------------------------\n
お問い合わせ内容: $data{select}\n
ご所属: $data{affiliation}\n
氏名: $data{name}\n
メールアドレス: $data{email}\n
お問い合わせ内容: $data{content}\n
ご連絡先お電話番号: $data{phone}\n
------------------------------------------------------------------------------------------
EOF
    close $sendmail or die "Error closing sendmail: $!";
};
if ($@) {
    print "Error: $@\n";
}
else {
    eval {
        open my $sendmail, "| /usr/sbin/sendmail -oi -t" or die $!;
        print $sendmail <<EOF;
From: jrista\@jrista-isr.com(JRISTA)
To: JRISTA\@bms.com
Subject: Contact From JRISTA事務局\n
お問い合わせ内容: $data{select}\n
ご所属: $data{affiliation}\n
氏名: $data{name}\n
メールアドレス: $data{email}\n
お問い合わせ内容: $data{content}\n
ご連絡先お電話番号: $data{phone}
EOF
        close $sendmail or die "Error closing sendmail: $!";
    };
    if ($@) {
        print "Error: $@\n";
    }
    else {
        print "Location: ../../contact-complete/index.html\n\n";
    }
}

