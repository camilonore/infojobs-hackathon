interface Props {
  className?: string
}

function ClockIcon({ className }: Props) {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className ?? ''}
    >
      <path
        className={className ?? ''}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.2457 4.91025C17.704 2.18385 13.8826 1.05213 10.2661 1.95477C6.64967 2.85741 3.80829 5.65213 2.84587 9.25313C1.88346 12.8541 2.95173 16.6938 5.63567 19.2803C7.53242 21.2256 10.1287 22.3311 12.8457 22.3503H12.9257C17.0639 22.3659 20.8049 19.8892 22.4064 16.0734C24.008 12.2576 23.1554 7.85283 20.2457 4.91025ZM12.9359 20.8507H12.8459C8.01344 20.8313 4.1116 16.8981 4.13093 12.0657C4.15026 7.23317 8.08344 3.33133 12.9159 3.35066H12.9859C17.8184 3.36999 21.7203 7.30317 21.7009 12.1357C21.6816 16.9681 17.7484 20.87 12.9159 20.8507H12.9359ZM17.7853 14.4798L13.6853 12.1598V7.59984C13.688 7.40093 13.6115 7.2091 13.4727 7.06657C13.334 6.92403 13.1442 6.84248 12.9453 6.83984C12.535 6.83981 12.2008 7.16954 12.1953 7.57984V12.5798C12.1947 12.852 12.3396 13.1038 12.5753 13.2398L17.0553 15.7798C17.1648 15.8434 17.2887 15.8779 17.4153 15.8798C17.7542 15.878 18.0497 15.6491 18.1363 15.3215C18.2229 14.9939 18.079 14.6489 17.7853 14.4798Z'
        fill='black'
      ></path>
    </svg>
  )
}

export { ClockIcon }
