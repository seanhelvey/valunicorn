var weekdays = ["X-3 SD", "X-2 SD", "X-1 SD", "X", "X+1 SD", "X+2 SD", "X+3 SD",""];

var chart = c3.generate({
    data: {
        x: 'x',

        // columns: [
        //     ['x','1970-01-01','1970-02-01','1970-03-01','1970-04-01','1970-05-01','1970-06-01','1970-07-01','1970-08-01','1970-09-01','1970-10-01','1970-11-01','1970-12-01','1971-01-01','1971-02-01','1971-03-01','1971-04-01','1971-05-01','1971-06-01','1971-07-01','1971-08-01','1971-09-01','1971-10-01','1971-11-01','1971-12-01','1972-01-01','1972-02-01','1972-03-01','1972-04-01','1972-05-01','1972-06-01','1972-07-01','1972-08-01','1972-09-01','1972-10-01','1972-11-01','1972-12-01','1973-01-01','1973-02-01','1973-03-01','1973-04-01','1973-05-01','1973-06-01','1973-07-01','1973-08-01','1973-09-01','1973-10-01','1973-11-01','1973-12-01','1974-01-01','1974-02-01','1974-03-01','1974-04-01','1974-05-01','1974-06-01','1974-07-01','1974-08-01','1974-09-01','1974-10-01','1974-11-01','1974-12-01','1975-01-01','1975-02-01','1975-03-01','1975-04-01','1975-05-01','1975-06-01','1975-07-01','1975-08-01','1975-09-01','1975-10-01','1975-11-01','1975-12-01','1976-01-01','1976-02-01','1976-03-01','1976-04-01','1976-05-01','1976-06-01','1976-07-01','1976-08-01','1976-09-01','1976-10-01','1976-11-01','1976-12-01','1977-01-01','1977-02-01','1977-03-01','1977-04-01','1977-05-01','1977-06-01','1977-07-01','1977-08-01','1977-09-01','1977-10-01','1977-11-01','1977-12-01','1978-01-01','1978-02-01','1978-03-01','1978-04-01','1978-05-01','1978-06-01','1978-07-01','1978-08-01','1978-09-01','1978-10-01','1978-11-01','1978-12-01','1979-01-01','1979-02-01','1979-03-01','1979-04-01','1979-05-01','1979-06-01','1979-07-01','1979-08-01','1979-09-01','1979-10-01','1979-11-01','1979-12-01','1980-01-01','1980-02-01','1980-03-01','1980-04-01','1980-05-01','1980-06-01','1980-07-01','1980-08-01','1980-09-01','1980-10-01','1980-11-01','1980-12-01','1981-01-01','1981-02-01','1981-03-01','1981-04-01','1981-05-01','1981-06-01','1981-07-01','1981-08-01','1981-09-01','1981-10-01','1981-11-01','1981-12-01','1982-01-01','1982-02-01','1982-03-01','1982-04-01','1982-05-01','1982-06-01','1982-07-01','1982-08-01','1982-09-01','1982-10-01','1982-11-01','1982-12-01','1983-01-01','1983-02-01','1983-03-01','1983-04-01','1983-05-01','1983-06-01','1983-07-01','1983-08-01','1983-09-01','1983-10-01','1983-11-01','1983-12-01','1984-01-01','1984-02-01','1984-03-01','1984-04-01','1984-05-01','1984-06-01','1984-07-01','1984-08-01','1984-09-01','1984-10-01','1984-11-01','1984-12-01','1985-01-01','1985-02-01','1985-03-01','1985-04-01','1985-05-01','1985-06-01','1985-07-01','1985-08-01','1985-09-01','1985-10-01','1985-11-01','1985-12-01','1986-01-01','1986-02-01','1986-03-01','1986-04-01','1986-05-01','1986-06-01','1986-07-01','1986-08-01','1986-09-01','1986-10-01','1986-11-01','1986-12-01','1987-01-01','1987-02-01','1987-03-01','1987-04-01','1987-05-01','1987-06-01','1987-07-01','1987-08-01','1987-09-01','1987-10-01','1987-11-01','1987-12-01','1988-01-01','1988-02-01','1988-03-01','1988-04-01','1988-05-01','1988-06-01','1988-07-01','1988-08-01','1988-09-01','1988-10-01','1988-11-01','1988-12-01','1989-01-01','1989-02-01','1989-03-01','1989-04-01','1989-05-01','1989-06-01','1989-07-01','1989-08-01','1989-09-01','1989-10-01','1989-11-01','1989-12-01','1990-01-01','1990-02-01','1990-03-01','1990-04-01','1990-05-01','1990-06-01','1990-07-01','1990-08-01','1990-09-01','1990-10-01','1990-11-01','1990-12-01','1991-01-01','1991-02-01','1991-03-01','1991-04-01','1991-05-01','1991-06-01','1991-07-01','1991-08-01','1991-09-01','1991-10-01','1991-11-01','1991-12-01','1992-01-01','1992-02-01','1992-03-01','1992-04-01','1992-05-01','1992-06-01','1992-07-01','1992-08-01','1992-09-01','1992-10-01','1992-11-01','1992-12-01','1993-01-01','1993-02-01','1993-03-01','1993-04-01','1993-05-01','1993-06-01','1993-07-01','1993-08-01','1993-09-01','1993-10-01','1993-11-01','1993-12-01','1994-01-01','1994-02-01','1994-03-01','1994-04-01','1994-05-01','1994-06-01','1994-07-01','1994-08-01','1994-09-01','1994-10-01','1994-11-01','1994-12-01','1995-01-01','1995-02-01','1995-03-01','1995-04-01','1995-05-01','1995-06-01','1995-07-01','1995-08-01','1995-09-01','1995-10-01','1995-11-01','1995-12-01','1996-01-01','1996-02-01','1996-03-01','1996-04-01','1996-05-01','1996-06-01','1996-07-01','1996-08-01','1996-09-01','1996-10-01','1996-11-01','1996-12-01','1997-01-01','1997-02-01','1997-03-01','1997-04-01','1997-05-01','1997-06-01','1997-07-01','1997-08-01','1997-09-01','1997-10-01','1997-11-01','1997-12-01','1998-01-01','1998-02-01','1998-03-01','1998-04-01','1998-05-01','1998-06-01','1998-07-01','1998-08-01','1998-09-01','1998-10-01','1998-11-01','1998-12-01','1999-01-01','1999-02-01','1999-03-01','1999-04-01','1999-05-01','1999-06-01','1999-07-01','1999-08-01','1999-09-01','1999-10-01','1999-11-01','1999-12-01','2000-01-01','2000-02-01','2000-03-01','2000-04-01','2000-05-01','2000-06-01','2000-07-01','2000-08-01','2000-09-01','2000-10-01','2000-11-01','2000-12-01','2001-01-01','2001-02-01','2001-03-01','2001-04-01','2001-05-01','2001-06-01','2001-07-01','2001-08-01','2001-09-01','2001-10-01','2001-11-01','2001-12-01','2002-01-01','2002-02-01','2002-03-01','2002-04-01','2002-05-01','2002-06-01','2002-07-01','2002-08-01','2002-09-01','2002-10-01','2002-11-01','2002-12-01','2003-01-01','2003-02-01','2003-03-01','2003-04-01','2003-05-01','2003-06-01','2003-07-01','2003-08-01','2003-09-01','2003-10-01','2003-11-01','2003-12-01','2004-01-01','2004-02-01','2004-03-01','2004-04-01','2004-05-01','2004-06-01','2004-07-01','2004-08-01','2004-09-01','2004-10-01','2004-11-01','2004-12-01','2005-01-01','2005-02-01','2005-03-01','2005-04-01','2005-05-01','2005-06-01','2005-07-01','2005-08-01','2005-09-01','2005-10-01','2005-11-01','2005-12-01','2006-01-01','2006-02-01','2006-03-01','2006-04-01','2006-05-01','2006-06-01','2006-07-01','2006-08-01','2006-09-01','2006-10-01','2006-11-01','2006-12-01','2007-01-01','2007-02-01','2007-03-01','2007-04-01','2007-05-01','2007-06-01','2007-07-01','2007-08-01','2007-09-01','2007-10-01','2007-11-01','2007-12-01','2008-01-01','2008-02-01','2008-03-01','2008-04-01','2008-05-01','2008-06-01','2008-07-01','2008-08-01','2008-09-01','2008-10-01','2008-11-01','2008-12-01','2009-01-01','2009-02-01','2009-03-01','2009-04-01','2009-05-01','2009-06-01','2009-07-01','2009-08-01','2009-09-01','2009-10-01','2009-11-01','2009-12-01','2010-01-01','2010-02-01','2010-03-01','2010-04-01','2010-05-01','2010-06-01','2010-07-01','2010-08-01','2010-09-01','2010-10-01','2010-11-01','2010-12-01','2011-01-01','2011-02-01','2011-03-01','2011-04-01','2011-05-01','2011-06-01','2011-07-01','2011-08-01','2011-09-01','2011-10-01','2011-11-01','2011-12-01','2012-01-01','2012-02-01','2012-03-01','2012-04-01','2012-05-01','2012-06-01','2012-07-01','2012-08-01','2012-09-01','2012-10-01','2012-11-01','2012-12-01','2013-01-01','2013-02-01','2013-03-01','2013-04-01','2013-05-01','2013-06-01','2013-07-01','2013-08-01','2013-09-01','2013-10-01','2013-11-01','2013-12-01','2014-01-01','2014-02-01','2014-03-01','2014-04-01','2014-05-01','2014-06-01','2014-07-01','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01',
        //     ],

        //    ['Value',4,6,6,5,5,5,6,6,7,6,8,8,7,7,11,11,8,9,7,10,11,9,11,11,9,8,12,7,7,9,8,2,1,2,5,1,1,1,1,1,1,1,1,2,2,3,4,4,4,4,4,4,4,5,5,6,7,9,10,12,13,13,13,11,11,12,12,11,10,11,12,12,13,11,7,7,6,6,7,5,6,6,6,5,3,2,1,1,1,1,1,1,2,3,2,3,3,3,4,4,4,4,3,4,4,4,5,5,5,6,7,7,7,8,11,13,13,10,13,13,13,10,13,13,13,13,13,11,11,12,10,11,13,10,11,9,8,11,8,7,6,7,11,8,7,8,10,11,9,4,5,13,6,1,1,1,3,4,3,1,3,2,1,1,2,3,3,2,4,5,4,3,1,2,3,3,3,3,3,4,4,3,3,3,4,4,4,5,5,6,7,9,12,13,13,13,12,11,12,13,13,12,13,12,9,7,7,7,6,7,7,7,6,5,5,5,6,5,4,4,2,3,3,2,2,1,1,2,2,2,2,3,3,3,5,5,5,7,9,8,7,7,7,6,5,7,6,6,7,10,13,13,13,12,10,12,12,10,9,11,13,12,11,10,8,7,7,6,5,5,8,9,11,13,9,7,7,9,8,5,2,1,2,1,4,5,6,7,7,5,2,1,1,1,1,3,5,4,3,2,2,2,3,3,4,6,6,5,6,5,6,7,7,8,7,7,6,6,6,9,12,13,13,13,11,11,10,10,12,13,13,11,8,8,7,5,7,7,7,7,6,5,6,7,13,13,13,13,13,12,11,10,9,8,9,9,10,10,8,7,5,6,8,9,10,9,7,7,8,8,8,10,9,7,3,1,1,1,1,3,7,7,7,7,5,6,4,5,7,10,13,13,10,8,7,7,7,5,4,3,3,2,1,1,1,1,2,2,2,1,1,1,2,2,3,3,4,4,4,3,3,2,2,2,3,3,3,3,4,5,6,6,7,7,7,7,7,9,9,11,10,11,11,11,9,8,11,11,11,11,13,13,13,13,13,13,13,13,13,13,12,11,11,12,13,13,13,13,13,12,12,11,10,7,7,7,6,6,6,5,4,3,3,3,3,3,2,2,2,3,3,3,3,3,3,2,2,3,3,3,4,4,4,5,6,7,7,7,8,10,11,10,10,9,8,7,7,7,7,7,7,8,8,8,7,8,7,6,5,3,1,1,1,1,1,2,3,4,4,4,4,],
        // ],

       columns: [
            ['x','1990-01-01','1990-02-01','1990-03-01','1990-04-01','1990-05-01','1990-06-01','1990-07-01','1990-08-01','1990-09-01','1990-10-01','1990-11-01','1990-12-01','1991-01-01','1991-02-01','1991-03-01','1991-04-01','1991-05-01','1991-06-01','1991-07-01','1991-08-01','1991-09-01','1991-10-01','1991-11-01','1991-12-01','1992-01-01','1992-02-01','1992-03-01','1992-04-01','1992-05-01','1992-06-01','1992-07-01','1992-08-01','1992-09-01','1992-10-01','1992-11-01','1992-12-01','1993-01-01','1993-02-01','1993-03-01','1993-04-01','1993-05-01','1993-06-01','1993-07-01','1993-08-01','1993-09-01','1993-10-01','1993-11-01','1993-12-01','1994-01-01','1994-02-01','1994-03-01','1994-04-01','1994-05-01','1994-06-01','1994-07-01','1994-08-01','1994-09-01','1994-10-01','1994-11-01','1994-12-01','1995-01-01','1995-02-01','1995-03-01','1995-04-01','1995-05-01','1995-06-01','1995-07-01','1995-08-01','1995-09-01','1995-10-01','1995-11-01','1995-12-01','1996-01-01','1996-02-01','1996-03-01','1996-04-01','1996-05-01','1996-06-01','1996-07-01','1996-08-01','1996-09-01','1996-10-01','1996-11-01','1996-12-01','1997-01-01','1997-02-01','1997-03-01','1997-04-01','1997-05-01','1997-06-01','1997-07-01','1997-08-01','1997-09-01','1997-10-01','1997-11-01','1997-12-01','1998-01-01','1998-02-01','1998-03-01','1998-04-01','1998-05-01','1998-06-01','1998-07-01','1998-08-01','1998-09-01','1998-10-01','1998-11-01','1998-12-01','1999-01-01','1999-02-01','1999-03-01','1999-04-01','1999-05-01','1999-06-01','1999-07-01','1999-08-01','1999-09-01','1999-10-01','1999-11-01','1999-12-01','2000-01-01','2000-02-01','2000-03-01','2000-04-01','2000-05-01','2000-06-01','2000-07-01','2000-08-01','2000-09-01','2000-10-01','2000-11-01','2000-12-01','2001-01-01','2001-02-01','2001-03-01','2001-04-01','2001-05-01','2001-06-01','2001-07-01','2001-08-01','2001-09-01','2001-10-01','2001-11-01','2001-12-01','2002-01-01','2002-02-01','2002-03-01','2002-04-01','2002-05-01','2002-06-01','2002-07-01','2002-08-01','2002-09-01','2002-10-01','2002-11-01','2002-12-01','2003-01-01','2003-02-01','2003-03-01','2003-04-01','2003-05-01','2003-06-01','2003-07-01','2003-08-01','2003-09-01','2003-10-01','2003-11-01','2003-12-01','2004-01-01','2004-02-01','2004-03-01','2004-04-01','2004-05-01','2004-06-01','2004-07-01','2004-08-01','2004-09-01','2004-10-01','2004-11-01','2004-12-01','2005-01-01','2005-02-01','2005-03-01','2005-04-01','2005-05-01','2005-06-01','2005-07-01','2005-08-01','2005-09-01','2005-10-01','2005-11-01','2005-12-01','2006-01-01','2006-02-01','2006-03-01','2006-04-01','2006-05-01','2006-06-01','2006-07-01','2006-08-01','2006-09-01','2006-10-01','2006-11-01','2006-12-01','2007-01-01','2007-02-01','2007-03-01','2007-04-01','2007-05-01','2007-06-01','2007-07-01','2007-08-01','2007-09-01','2007-10-01','2007-11-01','2007-12-01','2008-01-01','2008-02-01','2008-03-01','2008-04-01','2008-05-01','2008-06-01','2008-07-01','2008-08-01','2008-09-01','2008-10-01','2008-11-01','2008-12-01','2009-01-01','2009-02-01','2009-03-01','2009-04-01','2009-05-01','2009-06-01','2009-07-01','2009-08-01','2009-09-01','2009-10-01','2009-11-01','2009-12-01','2010-01-01','2010-02-01','2010-03-01','2010-04-01','2010-05-01','2010-06-01','2010-07-01','2010-08-01','2010-09-01','2010-10-01','2010-11-01','2010-12-01','2011-01-01','2011-02-01','2011-03-01','2011-04-01','2011-05-01','2011-06-01','2011-07-01','2011-08-01','2011-09-01','2011-10-01','2011-11-01','2011-12-01','2012-01-01','2012-02-01','2012-03-01','2012-04-01','2012-05-01','2012-06-01','2012-07-01','2012-08-01','2012-09-01','2012-10-01','2012-11-01','2012-12-01','2013-01-01','2013-02-01','2013-03-01','2013-04-01','2013-05-01','2013-06-01','2013-07-01','2013-08-01','2013-09-01','2013-10-01','2013-11-01','2013-12-01','2014-01-01','2014-02-01','2014-03-01','2014-04-01','2014-05-01','2014-06-01','2014-07-01','2014-08-01','2014-09-01','2014-10-01','2014-11-01','2014-12-01','2015-01-01','2015-02-01','2015-03-01','2015-04-01','2015-05-01','2015-06-01','2015-07-01','2015-08-01','2015-09-01','2015-10-01','2015-11-01','2015-12-01','2016-1-01'
            ],

           ['Value',7,7,7,6,5,7,6,6,7,10,13,13,13,12,10,12,12,10,9,11,13,12,11,10,8,7,7,6,5,5,8,9,11,13,9,7,7,9,8,5,2,1,2,1,4,5,6,7,7,5,2,1,1,1,1,3,5,4,3,2,2,2,3,3,4,6,6,5,6,5,6,7,7,8,7,7,6,6,6,9,12,13,13,13,11,11,10,10,12,13,13,11,8,8,7,5,7,7,7,7,6,5,6,7,13,13,13,13,13,12,11,10,9,8,9,9,10,10,8,7,5,6,8,9,10,9,7,7,8,8,8,10,9,7,3,1,1,1,1,3,7,7,7,7,5,6,4,5,7,10,13,13,10,8,7,7,7,5,4,3,3,2,1,1,1,1,2,2,2,1,1,1,2,2,3,3,4,4,4,3,3,2,2,2,3,3,3,3,4,5,6,6,7,7,7,7,7,9,9,11,10,11,11,11,9,8,11,11,11,11,13,13,13,13,13,13,13,13,13,13,12,11,11,12,13,13,13,13,13,12,12,11,10,7,7,7,6,6,6,5,4,3,3,3,3,3,2,2,2,3,3,3,3,3,3,2,2,3,3,3,4,4,4,5,6,7,7,7,8,10,11,10,10,9,8,7,7,7,7,7,7,8,8,8,7,8,7,6,5,3,1,1,1,1,1,2,3,4,4,4,4,5,5,7,8,9,10,11,12,13,12,11,13],
        ],


    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y',
                count: 10
            }
        },
        y: {
            max: 13,
            min: 0,
            padding: {top: 5, bottom: -10},
            tick: {
                format: function(d) {
                  var index=0;
                  if (d==1) {
                    index=0;
                  } else if (d==3) {
                    index=1;
                  } else if (d==5) {
                    index=2;
                  } else if (d==7) {
                    index=3;
                  } else if (d==9) {
                    index=4;
                  } else if (d==11) {
                    index=5;
                  } else if (d==13) {
                    index=6;
                  } else {
                    index=7;
                  }
                  return weekdays[index];
                }
            },
        }
    },
});

$("#historicalChart").append(chart.element);